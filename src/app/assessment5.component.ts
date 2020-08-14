
import { Component } from '@angular/core';
import { ApiService } from './getData.service';
import { detail } from './details';
@Component({
    selector: 'login',
    templateUrl: './login.component.html',
   
})
export class LoginComponent  {
    admin:boolean
    user:boolean
    phno;
    data:detail[]
    constructor(private api:ApiService) { 
        this.admin=false
        this.user=false
    }
checkLogin(){
   
        
        this.api.Login(this.phno).subscribe((response)=>{
          console.log('response recieve')
          console.log(response)

    
          
        })
        
      }
      viewDetails(){
          if 
          (this.admin==true){
             this.api.ViewData().subscribe((response)=>{
                console.log('response recieve')
                console.log(response)
                this.data=response
      
          
                
              })
          }
      }
    
}

  

