import { StaffComponent } from './staff.component';
import { StudentComponent } from './student.component';
import { CheckComponent } from './check.component';
import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {path:'#',component:AppComponent},
 { path:'Student',component:StudentComponent},
  {path:'Staff',component:StaffComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
