import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Example1Component } from './examples/example1/example';
import { Example2Component } from './examples/example2/example';
import { Example3Component } from './examples/example3/example';
import { Example4Component } from './examples/example4/example';
import { Example5Component } from './examples/example5/example';
import { Example6Component } from './examples/example6/example';
import { Example7Component } from './examples/example7/example';
import { TodoItemComponent } from './todoitem/todoitem';
import { Example8Component } from './examples/example8/example';
import { Example9Component } from './examples/example9/example';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: '1', component: Example1Component },
  { path: '2', component: Example2Component },
  { path: '3', component: Example3Component },
  { path: '4', component: Example4Component },
  { path: '5', component: Example5Component },
  { path: '6', component: Example6Component },
  { path: '7', component: Example7Component },
  { path: '8', component: Example8Component },
  { path: '9', component: Example9Component }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Example1Component,
    Example2Component,
    Example3Component,
    Example4Component,
    Example5Component,
    Example6Component,
    Example7Component,
    TodoItemComponent,
    Example8Component,
    Example9Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
