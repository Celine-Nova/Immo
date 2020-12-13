import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { RouterModule } from '@angular/router';
import { PublicRoutingModule } from './public/public-routing.module';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app.routing.module';
import { PublicModule } from './public/public.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    
       
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    PublicRoutingModule,
    PublicModule
  ],
  exports: [
    CommonModule, 
    BrowserModule,
    RouterModule, 
    NavComponent,
    ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
