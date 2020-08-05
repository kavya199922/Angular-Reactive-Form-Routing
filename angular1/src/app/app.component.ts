import { Component } from '@angular/core';
//view
@Component({
  selector: 'app-root',
  template:'<h1><strong>{{title}}</strong></h1>',
  templateUrl: './app.component.html',

})
//data
export class AppComponent {
  title='app1'
 
}
