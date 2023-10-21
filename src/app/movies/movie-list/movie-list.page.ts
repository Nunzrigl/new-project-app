import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { films } from '../interfaces/movies.interface';



@Component({
  selector: 'movie-list',
  templateUrl: 'movie-list.page.html',
  styleUrls: ['movie-list.page.scss'],
})
export class MovieListPage implements OnInit {
  
 
  @Input() movies:films[]= [];
  @Output() movie= new EventEmitter<number>();
  @Output() edit= new EventEmitter<number>();

  constructor() {
    
  }
  ngOnInit(): void {
    
  }
 cliccaItem(id: number){
  this.movie.emit(id);
 }

 cliccaEdit(id: number){
  this.edit.emit(id);
 }
}