import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'test',
    template:`<input [(ngModel)]='name'><p>{{name}}</p>`
})
export class TestComponent  {
   name:string
    constructor() { 
        console.log(name)
    }
  
   

    
}
