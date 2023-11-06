import { Component, ViewChild } from '@angular/core';
import { MoviesService } from './sevices/movie.service';
import { films } from './interfaces/movies.interface';
import { Router } from '@angular/router';
import { ListItem } from '../shared/components/interfaces/list.interface';
import {BehaviorSubject,debounceTime, of,switchMap,} from 'rxjs';
import { RangeCustomEvent } from '@ionic/angular';
import { ListPage } from '../shared/components/list/list.component';

@Component({
  selector: 'app-movies',
  templateUrl: 'movies.page.html',
  styleUrls: ['movies.page.scss'],
})
export class MoviesPage {
  movieList: ListItem[] = [];
  initialMovieList: films[] = [];
  targetValue = new BehaviorSubject(0);
  @ViewChild(ListPage) listPage!: ListPage;

  selectedItemRating: number | undefined;
  selectedRating: number =0;

  selectedMovie$ = new BehaviorSubject<ListItem | undefined>(undefined);
  selectedMovie : ListItem | undefined;
  

  getRatingById(id: string): number | undefined {
    const selectedMovie = this.initialMovieList.find(
      (movie) => movie.id === id
    );
    return selectedMovie
      ? selectedMovie.rating.averageRating
      : undefined;
  }


  constructor(
    private readonly _movies: MoviesService,
    private readonly _route: Router
  ) {

    this.selectedMovie$.subscribe((selectedMovie) => {
      /* if (selectedMovie) {
        this.selectedItemDetails =` 
        Nome: ${selectedMovie.name}
        <br>Cast: ${selectedMovie.casts}
        <br>Anno: ${selectedMovie.year}
        <br>Rating: ${selectedMovie.rating}`;
      } */
      this.selectedMovie = selectedMovie
    });
  }

  onInitialMovieList() {
    // Inizializza la copia iniziale quando ottieni i dati dal server
    this._movies.getList().subscribe((movies) => {
      this.initialMovieList = movies;
    });
  }

  onIonChange(ev: Event) {
    const newTargetValue = +(ev as RangeCustomEvent).detail.value;
    this.targetValue.next(newTargetValue);
    this.selectedRating = newTargetValue;
    // Filtra la copia locale della lista dei film invece di chiamare il server
    this.movieList = this.initialMovieList
      .filter(
        (movie) => movie.rating.averageRating >= this.targetValue.getValue()
      )
      .map(({ id, title, rating, cast, year }) => {
        const castNames = cast.map((actor) => actor.celebrityName);
        return {
          id,
          name: title,
          rating: rating.averageRating,
          casts: castNames,
          year: year,
        };
      });
  }

  getListByTitle() {
    this.listPage.form.valueChanges
      .pipe(
        debounceTime(1000),
        switchMap((formData) => {
          const searchTerm = formData.name.toLowerCase();

          // Chiamata al servizio per ottenere la lista di film in base al termine di ricerca
          return this._movies.getByTitle(searchTerm);
        }),
        switchMap((movies) => {
          const trasformedMovies = movies.map(
            ({ id, title, rating, cast, year }) => {
              const castNames = cast.map((actor) => actor.celebrityName);
              return {
                id,
                name: title,
                rating: rating.averageRating,
                casts: castNames,
                year: year,
              };
            }
          );
          return of(trasformedMovies);
        })
      )

      .subscribe((movies) => {
        // Qui puoi gestire la lista di film ottenuta dalla chiamata al servizio

        // Aggiorna this.initialMovieList con la lista filtrata
        this.movieList = movies;
      });
  }

  private _getList() {
    this._movies
      .getList()
      .pipe(
        switchMap((movies) => {
          const trasformedMovies = movies.map(
            ({ id, title, rating, cast, year }) => {
              const castNames = cast.map((actor) => actor.celebrityName);
              return {
                id,
                name: title,
                rating: rating.averageRating,
                casts: castNames,
                year: year,
              };
            }
          );
          return of(trasformedMovies);
        })
      )
      .subscribe((movies) => {
        this.movieList = movies;
      });
  }

  /* private _getList(){
  this._movies.getList().subscribe((movies: films[]) => {
    this.movieList = movies.map((element: films) => {
      return {
        id: element.id,
        name: element.title,
      };
    });
  }); 
} */
  selectedItemDetails: string = '';
  title = 'movie';

  ionViewWillEnter() {
    this._getList();
    this.onInitialMovieList();
    this.getListByTitle();
    
  }

  create() {
    this._route.navigate(['tabs', 'movies', 'create']);
  }


  onSelect(movie: ListItem)  {
    this.selectedMovie$.next(movie);
    const id = movie.id;
    const selectedRating = this.getRatingById(id);
  
    if (selectedRating !== undefined) {
      this.selectedItemRating = selectedRating;
    }

   
    

  }

  detail(id: string) {

    this._route.navigate(['tabs', 'movies', 'details', id]);
  }

  edit(id: string) {
    this._route.navigate(['tabs', 'movies', 'edit', id]);
  }

  delete(id: string) {
    this._movies.delete(id).subscribe(() => {
      this._getList();
    });
  }
}


