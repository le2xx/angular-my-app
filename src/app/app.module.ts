import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Example1Component } from './examples/example1/example1';
import { Example2Component } from './examples/example2/example2';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: '1', component: Example1Component },
  { path: '2', component: Example2Component }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Example1Component,
    Example2Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
