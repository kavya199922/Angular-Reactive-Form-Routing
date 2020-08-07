import {Component} from '@angular/core'
@Component({
//similar to css selectors can be used as <courses-component>
    selector:'checking',
//render part
//{{}}=>interpolation
template:'<h1>{{property1}}</h1>'
})
export class CheckComponent{
    //property
    property1='hello from check component'
   
}