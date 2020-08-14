import { LoginComponent } from './assessment5.component';
import { PutmcComponent } from './putmc.component';
import { MicroserviceComponent } from './microservice.component';
import { Success } from './successreg.component';
import { PostdataComponent } from './postdata.component';
import { ValidateFormsComponent } from './validateforms.component'
import { TodolistComponent } from './todolist.component';
import { StaffComponent } from './staff.component';
import { StudentComponent } from './student.component';


import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes =
 [
  {path:'#',component:AppComponent},
 { path:'Student',component:StudentComponent},
  {path:'Staff',component:StaffComponent},
  {path:'todolist',component:TodolistComponent},
  {path:'forms',component:ValidateFormsComponent},
  {path:'HTTPmethods',component:PostdataComponent},
  {path:'success',component:Success},
  {path:'micro',component:MicroserviceComponent},
  {path:'micro/put',component:PutmcComponent},
 {path:'login2sys',component:LoginComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
