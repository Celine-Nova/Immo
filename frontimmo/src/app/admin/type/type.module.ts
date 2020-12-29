import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TypeDeleteComponent } from './type-delete/type-delete.component';

@NgModule({
  declarations: [TypeDeleteComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

  ]
})
export class TypeModule { }
