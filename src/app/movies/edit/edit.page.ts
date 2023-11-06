import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../sevices/movie.service';
import { films } from '../interfaces/movies.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
    selector: 'app-edit',
    templateUrl: 'edit.page.html',
    styleUrls: ['edit.page.scss']
})
export class EditPage {

    movieId: string = '';
    movie?: films;
    formMovie : FormGroup | undefined ;

    title = "Edit movie";
    
    constructor(private route: ActivatedRoute, private readonly _router: Router, private _movieService: MoviesService, private readonly _location : Location) {
        this.route.paramMap.subscribe(params => {
            if (params && params.get('id')) {
                const id = params.get('id');
                if (id) {
                    this.movieId = id;

                    this._movieService.getById(this.movieId).subscribe((movies: films) => {
                        this.movie = movies;
                        this._setForm();});  
            
                }
            }

           
            
            
        });
    }
    
    private _setForm(){
        this.formMovie = new FormGroup({
            id: new FormControl(this.movie?.id, Validators.required),
            title: new FormControl(this.movie?.title, Validators.required),
            year: new FormControl(this.movie?.year,Validators.required),
            genres: new FormControl(this.movie?.genres,Validators.required),
            runningTime: new FormControl(this.movie?.runningTime, Validators.required)

        }); 
        
      /*  this.formMovie.valueChanges.subscribe((x)=>{
            console.log(x);
        });  */

    }

    submitForm (){
        if(this.formMovie?.valid){
             this._movieService.update(this.formMovie?.value).subscribe((selectedMovie : films)=>{

                this._location.back();
             });
               
            
        }
    } 







}