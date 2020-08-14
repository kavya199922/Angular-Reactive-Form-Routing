create database kavyaassessment;
show tables;
use kavyaassessment;
create table usersinsystem(phno bigint not null,username varchar(20),userrole varchar(10),primary key(phno));
select * from usersinsystem;
create table userdetails(phno bigint not null,name varchar(20),location varchar(20),loginstatus varchar(100),foreign key(phno) references usersinsystem(phno));
