import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { RouterModule } from '@angular/router';
import { PublicRoutingModule } from './public/public-routing.module';

import { AppRoutingModule } from './app.routing.module';
import { CommonModule } from '@angular/common';
import { PublicModule } from './public/public.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    
   
       
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    FormsModule
   
   
  ],
  exports: [
    BrowserModule,
    RouterModule, 
    NavComponent,
    ReactiveFormsModule,
    FormsModule
    ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
