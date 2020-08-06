import { TodolistComponent } from './todolist.component';
import { PostdataComponent } from './postdata.component';
import { StudentComponent } from './student.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//user-imports

import {CheckComponent} from './check.component'

@NgModule({
  declarations: [
    AppComponent,CheckComponent,StudentComponent,PostdataComponent,TodolistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
