import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PropertyService } from 'src/app/shared/service/property.service';
import { Property } from '../../shared/model/property';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties : Property[];
  constructor(private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.getProperties();
  }
  
  getProperties(){
    // console.log('coucou vous');
    this.propertyService.getProperties()
    .subscribe(data =>{
      console.log(data);
      this.properties = data
    } )
  }
 
}
