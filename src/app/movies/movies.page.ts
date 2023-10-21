import { Component } from '@angular/core';
import { MoviesService } from './sevices/movie.service';
import { films } from './interfaces/movies.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: 'movies.page.html',
  styleUrls: ['movies.page.scss']
})
export class MoviesPage {
  
  constructor(private readonly _movies: MoviesService,
    private readonly _route: Router) {
    
  }

 moviesList : films[]= this._movies.getList();  


ionViewWillEnter(){
  this._movies.getList();
}

 move(id: number){
  this._route.navigate(['tabs','movies', 'details', id] ); 
  
 }

 edit(id: number){
  this._route.navigate(['tabs','movies', 'edit', id] ); 
 }
}
