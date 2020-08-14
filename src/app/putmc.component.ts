import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';

@Component({
    selector: 'put-mc',
    template:`<label>Enter Name</label>
    <input type='text' [(ngModel)]="name" name='name'>
    <label>Enter New Password</label>
    <input type='text' [(ngModel)]="password" name='password'>
    <button (click)="putData()">Update</button>`
    
    
})

export class PutmcComponent {
    name:string
    password:string
    jsonData;
    constructor(private http:HttpClient) { }
    putData(){
        
   
        console.log(this.name)
          this.http.put('http://127.0.0.1:4002/'+this.name+'/'+this.password,null).toPromise().then((data:any)=>{
              // this.jsonData=(data.json)
              this.jsonData=data
              console.log(data)
            
              
          })
       }

  

    
}
