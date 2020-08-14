import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
    selector: 'micro-service',
    templateUrl: './microservice.component.html'

})
export class MicroserviceComponent{
    url='http://127.0.0.1:4000/'
    name:string
    email:string
    password:string
    jsonData;
    constructor(private http:HttpClient) {

     }
    
   //  getData
      getData(){
         
         this.http.get('http://127.0.0.1:4000/get/'+this.name).toPromise().then((data:any)=>{
             // this.jsonData=(data.json)
             this.jsonData=data
             console.log(data)
             
             
         })
      }
     //  create data
      postData(){
         
    
       console.log(this.name)
         this.http.post('http://127.0.0.1:4000/'+this.name+'/'+this.email+'/'+this.password,null).toPromise().then((data:any)=>{
             // this.jsonData=(data.json)
             this.jsonData=data
             console.log(data)
           
             
         })
      }
      //edit data
    //   putData(){
         
    
    //    console.log(this.name)
    //      this.http.put('http://127.0.0.1:4000/put/'+this.id+'/'+this.name,null).toPromise().then((data:any)=>{
    //          // this.jsonData=(data.json)
    //          this.jsonData=data
    //          console.log(data)
           
             
    //      })
    //}
      
 


}
