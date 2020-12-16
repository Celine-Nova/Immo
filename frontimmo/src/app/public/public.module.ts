import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyListComponent } from './property-list/property-list.component';
import { DetailPropertyComponent } from './detail-property/detail-property.component';

import { PublicRoutingModule } from './public-routing.module';
import { HttpClientModule } from '@angular/common/http';

// import { RouterModule } from '@angular/router';
// import { SharedModule } from '../shared/shared.module';



@NgModule({
    declarations: [
      PropertyListComponent,
      DetailPropertyComponent
    ],
    imports: [
      PublicRoutingModule,
      CommonModule,
  
    ],
    exports: [
      // CommonModule,
    ],
  })
  export class PublicModule { }
  