import { ApiService } from './getData.service';

import { LoginComponent } from './assessment5.component';
import { PutmcComponent } from './putmc.component';
import { MicroserviceComponent } from './microservice.component';
import { TestComponent } from './test.component';
import { RouterModule } from '@angular/router';
import { Success } from './successreg.component';
import { ValidateFormsComponent } from './validateforms.component';
import { TodolistComponent } from './todolist.component';
import { PostdataComponent } from './postdata.component';
import { StudentComponent } from './student.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';



//user-imports

import {CheckComponent} from './check.component'
import { from } from 'rxjs';

@NgModule({
  declarations: [
   PutmcComponent, MicroserviceComponent, TestComponent, AppComponent,CheckComponent,StudentComponent,PostdataComponent,TodolistComponent,ValidateFormsComponent,Success,LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,ReactiveFormsModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
