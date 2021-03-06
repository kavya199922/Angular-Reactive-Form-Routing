
from flask import Flask, request, jsonify
from flask_restful import  Api
from flaskext.mysql import MySQL
from flask_cors import CORS,cross_origin
import json
mysql = MySQL()
app = Flask(__name__)
CORS(app)
cors=CORS(app,resources={
    r"/*":{
        "origins":'http://localhost:4202',
        "methods":['GET','POST','PUT','DELETE']
    }
})


port = 4002

# config = {
#   'ORIGINS': [
#     'http://localhost:4002',
#   ]
# }
# CORS(app, resources={ r'/*': {'origins': config['ORIGINS']}}, supports_credentials=True)



# MySQL configurations
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'kavya'
app.config['MYSQL_DATABASE_DB'] ='conference'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'

mysql.init_app(app)

# Api creation
api = Api(app)

#post
@app.route('/<string:name>/<string:email>/<string:password>',methods=['GET','POST'])
def update(name,password):
       
        conn = mysql.connect()
        cursor = conn.cursor()
        # id=request.json['id']
        # name=request.json['name']
        insert_query="update table customerdata set custpassword=%s where customername=%s"
        # insert_query = "insert into departments (dept_id,dept_name) values (" + \
        #                str(id) + ", '" + name + "')"
        cursor.execute(insert_query,[(password),(name)])
        conn.commit()
        updated_data='select * from customerdata where customername=%s'
        cursor.execute(updated_data,[(name)])
        result=cursor.fetchone()
        conn.close()
        details = {'name': result[0], 'email': result[1],'password':result[2]}
        return details,201



 

app.run(port=port,debug=True)