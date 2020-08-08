import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,NgForm,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({ 
    selector: 'validateforms',
    templateUrl: './validateforms.component.html',

 
})
export class ValidateFormsComponent  {
    title='Validation using Reactive Forms'
    signupForm:FormGroup;
    fname:string='';
    password:string='';
    email:string='';
    
    constructor(private frmbuilder:FormBuilder,private http:HttpClient) { 
        this.signupForm=frmbuilder.group({
           
            fname:new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]),
            password:new FormControl('',[Validators.required,Validators.minLength(8)]),
            email:new FormControl('',[Validators.required,Validators.email]),
           

           
        })
    }
    postData(){
        this.http.post('http://127.0.0.1:4000/'+this.fname+'/'+this.email+'/'+this.password,null).toPromise().then((data:any)=>{
            // this.jsonData=(data.json)
            
            console.log(data)
          
    })
}
}
