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

    movieId: number = 0;
    movie?: films;
    formMovie : FormGroup | undefined ;

    constructor(private route: ActivatedRoute, private readonly _router: Router, private _movieService: MoviesService, private readonly _location : Location) {
        this.route.paramMap.subscribe(params => {
            if (params && params.get('id')) {
                const id = params.get('id');
                if (id) {
                    this.movieId = +id;

                    this.movie = this._movieService.getById(this.movieId);
                    console.log(this.movie);
                    this._setForm();
            
                }
            }
        });
    }
    
    private _setForm(){
        this.formMovie = new FormGroup({
            id: new FormControl(this.movie?.id, Validators.required),
            title: new FormControl(this.movie?.title, Validators.required),
            genres: new FormControl(this.movie?.genres,Validators.required),
            plot: new FormControl(this.movie?.plot, Validators.required)

        });

    }

     submitForm (){
        if(this.formMovie?.valid){
             this._movieService.update(this.formMovie?.value);
             this._location.back();    
            
        }
    } 







}