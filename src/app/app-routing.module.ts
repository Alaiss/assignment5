import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { Lab1Component } from './components/lab1/lab1.component';
import { Lab2Component } from './components/lab2/lab2.component';
import { Lab4Component } from './components/lab4/lab4.component';
import { Lab3Component } from './components/lab3/lab3.component';
import { Lab5Component } from './components/lab5/lab5.component';
import { Lab6Component } from './components/lab6/lab6.component';
import { Lab7Component } from './components/lab7/lab7.component';
import { Assignment1Component } from './components/assignment1/assignment1.component';
import { Assignment2Component } from './components/assignment2/assignment2.component';
import { Assignment3Component } from './components/assignment3/assignment3.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'lab-1', component: Lab1Component },
  { path: 'lab-2', component: Lab2Component},
  { path: 'lab-3', component: Lab3Component},
  { path: 'lab-4', component: Lab4Component},
  { path: 'lab-5', component: Lab5Component},
  { path: 'lab-6', component: Lab6Component},
  { path: 'lab-7', component: Lab7Component},

  { path: 'assignment-1', component: Assignment1Component},
  { path: 'assignment-2', component: Assignment2Component},
  { path: 'assignment-3', component: Assignment3Component},

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
