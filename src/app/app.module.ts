import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Example1 } from './examples/example-1/app.example-1';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ex1', component: Example1 }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Example1,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
