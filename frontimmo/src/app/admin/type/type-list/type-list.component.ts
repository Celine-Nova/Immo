import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { TypeService } from 'src/app/shared/service/type.service'

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css']
})
export class TypeListComponent implements OnInit {
  types$: Observable<any>;
  constructor(private typeService: TypeService) { }

  ngOnInit(): void {
    this.getTypes();
  }

  getTypes(){
    this.typeService.getTypes()
    .subscribe(data => this.types$ = data);
  }
}
