import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
// import { PropertyListComponent } from '../public/property-list/property-list.component';
import { TypeListComponent } from './type/type-list/type-list.component';
import { TypeAddComponent } from './type/type-add/type-add.component';
import { TypeEditComponent } from './type/type-edit/type-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
    //   PropertyListComponent,
      TypeListComponent,
      TypeAddComponent,
      TypeEditComponent,
    ], 
    imports: [
      CommonModule,
      AdminRoutingModule,
      ReactiveFormsModule,
      FormsModule,
    ],
    exports: [
      ReactiveFormsModule,
      FormsModule,
    ],
    providers: [DatePipe]
  })
  export class AdminModule { }
  