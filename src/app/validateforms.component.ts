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
 
    
    constructor(private frmbuilder:FormBuilder) { 
        this.signupForm=frmbuilder.group({
           
            fname:new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(10)])
           
        })
    }
}
