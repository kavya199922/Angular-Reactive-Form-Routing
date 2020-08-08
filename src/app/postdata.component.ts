import {  HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
    selector: 'post-data',
    templateUrl:'./post.component.html'
})
export class PostdataComponent  {
    url='http://127.0.0.1:4000/'
   id:number;
   name:string;
   jsonData;
   deptData;
   div1;
  
    constructor(private http:HttpClient) {
       this.div1=false
     }
     getAllData(){
       this.http.get('http://127.0.0.1:4000/getall').toPromise().then((data:any)=>{
           this.jsonData=data
           console.log(data)
    
       }) 
     }
  //  getData
     getData(){
         this.url=this.url+this.id
         console.log(this.id)
        this.http.get(this.url).toPromise().then((data:any)=>{
            // this.jsonData=(data.json)
            this.jsonData=data
            console.log(data)
            this.url='http://127.0.0.1:4000/'
            this.div1=true
        })
     }
    //  create data
     postData(){
        
   
      console.log(this.name)
        this.http.post('http://127.0.0.1:4000/'+this.id+'/'+this.name,null).toPromise().then((data:any)=>{
            // this.jsonData=(data.json)
            this.jsonData=data
            console.log(data)
          
            
        })
     }
     //edit data
     putData(){
        
   
      console.log(this.name)
        this.http.put('http://127.0.0.1:4000/put/'+this.id+'/'+this.name,null).toPromise().then((data:any)=>{
            // this.jsonData=(data.json)
            this.jsonData=data
            console.log(data)
          
            
        })
     }

    //delete data
    deleteData(){
        
  
   
        this.http.delete('http://127.0.0.1:4000/delete/'+this.id,{headers:{'Content-Type': 'application/json;charset=utf-8'}}).toPromise().then((data:any)=>{
            // this.jsonData=(data.json)
            this.jsonData=data
            console.log(data)
          
            
        })
     }

    
}


