import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyListComponent } from './property-list/property-list.component';
import { DetailPropertyComponent } from './detail-property/detail-property.component';

import { PublicRoutingModule } from './public-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NavComponent } from '../nav/nav.component';


@NgModule({
    declarations: [
      PropertyListComponent,
      DetailPropertyComponent
    ],
    imports: [
      CommonModule,
      PublicRoutingModule,
      HttpClientModule,
      BrowserModule
    ],
    exports: [
      CommonModule, 
      BrowserModule,
      RouterModule, 
      ],
  })
  export class PublicModule { }
  