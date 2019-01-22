import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DataManagerService } from './data-manager.service';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { Lab1Component } from './components/lab1/lab1.component';
import { Lab2Component } from './components/lab2/lab2.component';
import { Lab3Component } from './components/lab3/lab3.component';
import { Lab4Component } from './components/lab4/lab4.component';
import { Lab5Component } from './components/lab5/lab5.component';
import { Lab6Component } from './components/lab6/lab6.component';
import { Lab7Component } from './components/lab7/lab7.component';
import { Assignment1Component } from './components/assignment1/assignment1.component';
import { Assignment2Component } from './components/assignment2/assignment2.component';
import { Assignment3Component } from './components/assignment3/assignment3.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    Lab1Component,
    Lab2Component,
    Lab3Component,
    Lab4Component,
    Lab5Component,
    Lab6Component,
    Lab7Component,
    Assignment1Component,
    Assignment2Component,
    Assignment3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
