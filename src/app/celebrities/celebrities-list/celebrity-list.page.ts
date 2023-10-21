import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { celebrities } from '../celebrities-interface/celebrities-interface';



@Component({
  selector: 'celebrity-list',
  templateUrl: 'celebrity-list.page.html',
  styleUrls: ['celebrity-list.page.scss'],
})
export class CelebrityListPage  implements OnInit  {
  

  @Input() celebrityList:celebrities[]= [];
  @Output() celebrity= new EventEmitter<number>();
  @Output() edit= new EventEmitter<number>();

  constructor() {
    
  }
  ngOnInit(): void {
    
  }
 cliccaItem(id: number){
  this.celebrity.emit(id);
 }

 cliccaEdit(id: number){
  this.edit.emit(id);
 } 
}