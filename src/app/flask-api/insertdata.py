from connect2db import *
from datetime import datetime
cursor=connect2db.cursor()
cursor.execute('use kavyaassessment')
#insert into usersinsystem
# phno bigint not null,username varchar(20),userrole varchar(10),primary key(phno)
users_in_system=[
    (7338908957,'adminuser','admin'),
    (9445411598,'Abi','user'),
    (9444149885,'martha','user')

]
insert_user='insert into usersinsystem(phno,username,userrole) values(%s,%s,%s)'
cursor.executemany(insert_user,users_in_system)
connect2db.commit()
cursor.execute('select * from usersinsystem')
print(cursor.fetchall())

#inserting userdetails
# phno name loc loginstatus

user_details=[
    (7338908957,'Kavya_Admin','chennai','last login: '+str(datetime.now())),
    (9445411598,'ABINAYA','MUMBAI','last login: '+str(datetime.now())),
    (9444149885,'Martha','Germany','last login: '+str(datetime.now()))
]
insert_user='insert into userdetails(phno,name,location,loginstatus) values(%s,%s,%s,%s)'
cursor.executemany(insert_user,user_details)
connect2db.commit()
cursor.execute('select * from userdetails')
print(cursor.fetchall())