import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TypeService } from 'src/app/shared/service/type.service';

@Component({
  selector: 'app-type-add',
  templateUrl: './type-add.component.html',
  styleUrls: ['./type-add.component.css']
})
export class TypeAddComponent implements OnInit {
  typeForm = new FormGroup({
    name: new FormControl()
  })
  // typeForm = new FormControl('hello')
  constructor(private typeService: TypeService, private router: Router) { }

  ngOnInit(): void {
   
  }
  
  onSubmit(){
    // console.log("ca passe");
    //la promesse : Ajouter valeur du formulaire grâce à la methode addType du TypeService
    this.typeService.addType(this.typeForm.value)
    //je souscris
    .subscribe(type =>{
      //je redirige vers la page admin des types
      this.router.navigate(['/admin/types']);
    })

  }
}
