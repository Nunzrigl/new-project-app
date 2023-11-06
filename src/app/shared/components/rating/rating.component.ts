import { Component, EventEmitter, Injectable, Input, Output } from '@angular/core';
import { ListItem } from '../interfaces/list.interface';
import {  BehaviorSubject, Subscription } from 'rxjs';

import { films } from 'src/app/movies/interfaces/movies.interface';



@Component({
  selector: 'app-rating',
  templateUrl: 'rating.component.html',
  styleUrls: ['rating.component.scss']
})


export class RatingPage {

    @Input() Rating =0;

    barColor= '';

    movieList: ListItem[] = [];

  constructor (){
   
    
  }

  ngOnChanges(){
    this.ratingToDecimal();
    this.setBarColor(this.Rating);  }

  setBarColor(Rating:number){
    if ( Rating <= 0.4){
      this.barColor= 'danger';
    } else if ( Rating >= 0.4 && Rating <=0.6){
      this.barColor= 'warning';
    }else if ( Rating >= 0.6 ){
      this.barColor= 'primary';
    }
  }
 
  ratingToDecimal(){
    this.Rating= this.Rating /10

    
  }
}

