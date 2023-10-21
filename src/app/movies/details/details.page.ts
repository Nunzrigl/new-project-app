import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ActivatedRoute, Route, Router } from '@angular/router';
import { MoviesService } from '../sevices/movie.service';
import { films } from '../interfaces/movies.interface';



@Component({
  selector: 'app-details',
  templateUrl: 'details.page.html',
  styleUrls: ['details.page.scss'],
})

export class DetailsPage {
  movieId: number= 0;
  movie?: films  ;
  

  constructor(private route: ActivatedRoute, private readonly _router: Router, private _movies: MoviesService) {
    this.route.paramMap.subscribe(params => {
      if (params && params.get('id')) {
        const id = params.get('id');
        if (id) {
          this.movieId = +id;

          this.movie = this._movies.getById(this.movieId);
          console.log(this.movie);
        }
      }
    });
  }
  

  backToMovies(boolean: boolean) {
    this._router.navigate(['']);
  }

}