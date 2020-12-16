import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { TypeService } from 'src/app/shared/service/type.service';
import { Type } from 'src/app/shared/model/type';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css']
})
export class TypeListComponent implements OnInit {
  types: Type[];
  constructor(private typeService: TypeService) { }

  ngOnInit(): void {
    this.getTypes();
  }

  getTypes(){
    this.typeService.getTypes()
    .subscribe(data => this.types = data);
  }
}
