import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { celebrities } from '../celebrities-interface/celebrities-interface';
import { CelebritiesService } from '../celebrities-services/celebrities.services';

@Component({
    selector: 'app-create',
    templateUrl: 'create.page.html',
    styleUrls: ['create.page.scss']
})
export class CreatePage {

    celebrityId: number = 0;
    celebrity?: celebrities;
    formCreate : FormGroup | undefined ;

    title='Create celebrity';
    constructor(private route: ActivatedRoute, private _celebrityService: CelebritiesService, private readonly _location : Location) {
        
            
       this._setForm();
            

      
    }
    
    private _setForm(){
        this.formCreate = new FormGroup({
            id: new FormControl(this.celebrity?.id),
            name: new FormControl(this.celebrity?.name, Validators.required),
            birthYear: new FormControl(this.celebrity?.birthYear, Validators.required),
            deathYear: new FormControl(this.celebrity?.deathYear, Validators.required),
            

        }); 
        
      /* this.formMovie.valueChanges.subscribe((x)=>{
            console.log(x);
        }); */

    }

     submitForm (){
    
        if(this.formCreate?.valid){
             this._celebrityService.create(this.formCreate?.value).subscribe(()=>{
                this._location.back();    
            
             });
            
        }
    } 
    
    
}