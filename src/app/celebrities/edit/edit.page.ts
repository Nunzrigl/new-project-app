import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { celebrities } from '../celebrities-interface/celebrities-interface';
import { CelebritiesService } from '../celebrities-services/celebrities.services';

@Component({
  selector: 'app-edit',
  templateUrl: 'edit.page.html',
  styleUrls: ['edit.page.scss']
})
export class EditPage {

  celebrityId: string = '';
  celebrity?: celebrities;
  formCelebrity: FormGroup | undefined;

  title= 'Edit Celebrity';
  constructor(private route: ActivatedRoute, private readonly _router: Router, private _celebrities: CelebritiesService, private readonly _location: Location) {
    this.route.paramMap.subscribe(params => {
      if (params && params.get('id')) {
        const id = params.get('id');
        if (id) {
          this.celebrityId = id;

          this._celebrities.getById(this.celebrityId).subscribe((celebrities: celebrities) => {
            this.celebrity = celebrities;
            this._setForm();
          });  
          //this.celebrity = this._celebrities.getById(this.celebrityId);
          
        }
      }
    });
  }

  private _setForm() {
    this.formCelebrity = new FormGroup({
      id: new FormControl(this.celebrity?.id, Validators.required),
      name: new FormControl(this.celebrity?.name, Validators.required),
      birthYear: new FormControl(this.celebrity?.birthYear, Validators.required),
      deathYear: new FormControl(this.celebrity?.deathYear)

    });

  }

  submitForm() {
    if (this.formCelebrity?.valid) {
      this._celebrities.update(this.formCelebrity?.value).subscribe((selectedCelebrity: celebrities)=>{
        this._location.back();

      });

    }
  }
}