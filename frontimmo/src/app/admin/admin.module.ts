import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
// import { PropertyListComponent } from '../public/property-list/property-list.component';
import { TypeListComponent } from './type/type-list/type-list.component';
import { TypeAddComponent } from './type/type-add/type-add.component';
import { TypeEditComponent } from './type/type-edit/type-edit.component';

@NgModule({
    declarations: [
    //   PropertyListComponent,
      TypeListComponent,
      TypeAddComponent,
      TypeEditComponent,
    ], 
    imports: [
      CommonModule,
    //   SharedModule,
      AdminRoutingModule
    ],
    exports: [],
    providers: [DatePipe]
  })
  export class AdminModule { }
  