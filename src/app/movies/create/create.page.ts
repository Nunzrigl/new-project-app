import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../sevices/movie.service';
import { films } from '../interfaces/movies.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
    selector: 'app-create',
    templateUrl: 'create.page.html',
    styleUrls: ['create.page.scss']
})
export class CreatePage {

    movieId: number = 0;
    movie?: films;
    formCreate : FormGroup | undefined ;

    @Input() title ='Create movie';

    constructor(private route: ActivatedRoute, private _movieService: MoviesService, private readonly _location : Location) {
        
            
      this._setForm();
            

      
    }
    
    private _setForm(){
        this.formCreate = new FormGroup({
            id: new FormControl(this.movie?.id),
            title: new FormControl(this.movie?.title, Validators.required),
            genres: new FormControl(this.movie?.genres,Validators.required),
            runningTime: new FormControl(this.movie?.runningTime, Validators.required),
            year: new FormControl(this.movie?.year, Validators.required),
            averageRating: new FormControl(0, Validators.required),
            numVotes: new FormControl(0, Validators.required),

        }); 
        
      /* this.formMovie.valueChanges.subscribe((x)=>{
            console.log(x);
        }); */

    }

     submitForm (){
    
        if(this.formCreate?.valid){
             this._movieService.create(this.formCreate?.value).subscribe((movie: films)=>{
                this._location.back();  
             });
              
            
        }
    } 
    
    
}