// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeService } from 'src/app/shared/service/type.service';

@Component({
  selector: 'app-type-edit',
  templateUrl: './type-edit.component.html',
  styleUrls: ['./type-edit.component.css']
})
export class TypeEditComponent implements OnInit {
  // type;
  id: number;
  typeForm: FormGroup;

  constructor(private typeService: TypeService, private router: Router, private route: ActivatedRoute) {
    this.route.params
    .subscribe(params => this.id = params.id)
   }

  ngOnInit(): void {
    this.getType(this.id);
    this.typeForm = new FormGroup({
      name: new FormControl()
    });
    
  }


  //  je recupère le type avec son id
getType(id: number) {
     this.typeService.getType(id)
       // Utilisez la patchValue()méthode pour remplacer toutes les propriétés définies dans l'objet qui ont changé dans le modèle de formulaire.
       .subscribe( data => {
        this.typeForm.patchValue({
              name: data.name
          
            });
        });
      }
  onSubmit() {
   
    this.typeService.editType(this.typeForm.value, this.id)
        .subscribe(type => {
          this.router.navigate(['/admin/types']);
          
        });
    }

}
