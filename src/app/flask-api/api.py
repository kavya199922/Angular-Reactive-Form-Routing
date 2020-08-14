from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from flaskext.mysql import MySQL
from flask_cors import CORS,cross_origin
mysql = MySQL()
app = Flask(__name__)
# cors
CORS(app)
# app.config['CORS_HEADERS'] = 'Content-Type'
cors=CORS(app,resources={
    r"/*":{
        "origins":'http://localhost:4202/',
        "methods":['GET','POST','PUT','DELETE']
    }
})
port=4003
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD']='kavya'
app.config['MYSQL_DATABASE_DB'] = 'kavyaassessment'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'

mysql.init_app(app)
api = Api(app)





@app.route('/login/<string:mobilenumber>',methods=['GET','POST'])
def login(mobilenumber):
    conn = mysql.connect()
    cursor = conn.cursor()
    check_query='select username,userrole from usersinsystem where phno=%s'
    cursor.execute(check_query,[(mobilenumber)])
    list_res=cursor.fetchone()

    if list_res[0]=='Kavya_Admin' and list_res[1]=='admin':
        return "admin",200
    elif list_res[1]=='user':
        return list_res[0],200
    else:
        return "Invalid Login",200


@app.route('/view')
def viewDeatils():
    conn = mysql.connect()
    cursor = conn.cursor()
    select_query="select phno,name,location,loginstatus from userdetails"
    cursor.execute(select_query)
    data_list=cursor.fetchall()
    if len(data_list)>0:
        return data_list,200
    else:
        return "no users",200

app.run(port=port,debug=True)




