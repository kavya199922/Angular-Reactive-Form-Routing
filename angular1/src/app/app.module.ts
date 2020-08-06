import { ValidateFormsComponent } from './validateforms.component';
import { TodolistComponent } from './todolist.component';
import { PostdataComponent } from './postdata.component';
import { StudentComponent } from './student.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms'

//user-imports

import {CheckComponent} from './check.component'

@NgModule({
  declarations: [
    AppComponent,CheckComponent,StudentComponent,PostdataComponent,TodolistComponent,ValidateFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
