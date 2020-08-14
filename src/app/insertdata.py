from connecttohost import *
cursor=connect2db.cursor()
cursor.execute('use AirFone')
#hashlib
import hashlib
import random
#-------------------------------------------Insert data into user table-----------------------------------------------------
#insert in to usertables(default:3 data)
# ID, Username,Password,Mobile No,UserRole
# password='kavya2299'
# password=password.encode('utf-8')
# h=hashlib.sha1(password).hexdigest()
# ------------------------------------>Insert Code starts
# password_list=[hashlib.sha1('kavya2299'.encode('utf-8')).hexdigest(),
#                hashlib.sha1('Sri1999'.encode('utf-8')).hexdigest(),
#                hashlib.sha1('RamyaSri99'.encode('utf-8')).hexdigest(),
#                hashlib.sha1('Satya100'.encode('utf-8')).hexdigest(),
#                hashlib.sha1('Gowrishankar1999'.encode('utf-8')).hexdigest(),
# hashlib.sha1('admin'.encode('utf-8')).hexdigest()
#                ]
#
# val = [
#
#   (1,'Kavya', password_list[0],7338908957,'customer'),
#   (2,'SriRanjini',password_list[1],9884242972,'customer'),
#   (3,'Ramya',password_list[2],7339275471,'customer'),
#   (4,'Satya',password_list[3],9177861720,'customer'),
#   (5,'GowriSankar',password_list[4],9080584953,'customer'),
#   (6,'Ebi',password_list[5],8668194659,'admin')
# ]
# insert_user='insert into user(ID,username,password,mobilenumber,userrole) values(%s,%s,%s,%s,%s)'
# cursor.executemany(insert_user,val)
# connect2db.commit()
# cursor.execute('select * from user')
# print(cursor.fetchall())
# --------------------------------------Plan
#planID,planName,Amount,PlanData,PlanType,Offer
list_of_plans=[
  (1,'4G data Voucher',2599,'740GB:unlimited calling,')
]
# --------------------------------------Insert data in conference table------------------------------------------------
#id,domain,title,dateofevent,location
# val = [
#
#   ('ML1','Machine Learning','ML and applns-IIT ','2020-09-22','chennai'),
#   ('BC1', 'Blockchain', 'BC-Ethereum', '2020-10-02', 'chandigarh'),
#   ('ML2', 'Machine Learning', 'ML and AI', '2020-12-12', 'manipal'),
#   ('IoT1', 'Internet of Things', 'IoT', '2022-05-05', 'mumbai'),
#   ('IoT2', 'Internet of Things', 'IoT', '2020-09-09', 'bangalore'),
#   ('BC2', 'Blockchain', 'BC-Bitcoin', '2021-01-01', 'delhi'),
#
# ]
# insert_user='insert into conferencedetails(confid,domain,title,dateofevent,location) values(%s,%s,%s,%s,%s)'
# cursor.executemany(insert_user,val)
# connect2db.commit()
# cursor.execute('select * from conferencedetails')
# print(cursor.fetchall())