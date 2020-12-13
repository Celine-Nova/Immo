import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from 'src/app/shared/service/property.service';
import { Property } from '../../shared/model/property';

@Component({
  selector: 'app-detail-property',
  templateUrl: './detail-property.component.html',
  styleUrls: ['./detail-property.component.css']
})
export class DetailPropertyComponent implements OnInit {
  id: number;
  property: Property;
  constructor(private route: ActivatedRoute, private propertyService: PropertyService) { }

  ngOnInit() :void {
    this.route.params.subscribe( params => {
      this.id = params.id;
      this.getProperty(this.id);
  });
}
  getProperty(id) {
    this.propertyService.getProperty(id)
    .subscribe( data => {
      console.log(data)
      this.property = data
    });
  }
}
