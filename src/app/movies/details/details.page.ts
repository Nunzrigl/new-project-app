import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../sevices/movie.service';
import { films } from '../interfaces/movies.interface';
import { ListItem } from 'src/app/shared/components/interfaces/list.interface';

@Component({
  selector: 'app-details',
  templateUrl: 'details.page.html',
  styleUrls: ['details.page.scss'],
})
export class DetailsPage {
  movieId: string = '';
  movie?: films;
  

  @Input() title = 'Movie';

  constructor(
    private route: ActivatedRoute,
    private readonly _router: Router,
    private _movies: MoviesService
  ) {
    this.route.paramMap.subscribe((params) => {
      if (params && params.get('id')) {
        const id = params.get('id');
        if (id) {
          this.movieId = id;

          this._movies.getById(this.movieId).subscribe((result: films) => {
            this.movie = result;
            console.log(this.movie);

            
          });
        }
      }
    });
  }

  
  

  backToMovies(boolean: boolean) {
    this._router.navigate(['']);
  }
}