import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'student',
    templateUrl: './student.component.html'
    // template:`<div>
    // <p *ngFor=let a of header>{{a}}</p></div>`
    // template:'<h1 *ngFor="let a of header">{{a}}</h1>'

    
})
export class StudentComponent  {
header=['no','firstname','lastname','handle']

 obj1=[{'no':1,'firstname':'kavya','lastname':'rengaraj','handle':'@kavya_99'},{'no':2,'firstname':'oviya','lastname':'mathi','handle':'@ovi'},{'no':3,'firstname':'jenani','lastname':'sheghal','handle':'@jshegal'}]
}
