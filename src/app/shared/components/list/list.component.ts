import { Component, EventEmitter, Injectable, Input, Output } from '@angular/core';
import { ListItem } from '../interfaces/list.interface';
import {  Subscription } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss']
})


export class ListPage {
  searchbar$: Subscription | undefined;
  form: FormGroup<any>;

  @Input() List : ListItem[]= [];
  @Input() Rating : number = 0;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl(),
    });
    this._setSearch();

    
  }

  private _setSearch() {
    this.searchbar$ = this.form.valueChanges.subscribe(formData => {
      console.log(formData);
    
    });
    
  
  
  }

  

 
  @Input() list: ListItem[] = [];
  @Output() onSelect: EventEmitter<ListItem> = new EventEmitter<ListItem>();
  @Output() idToEdit: EventEmitter<string> = new EventEmitter<string>();
  @Output() idToDelete: EventEmitter<string> = new EventEmitter<string>();
  
  
  
  select(movie : ListItem) {
    this.onSelect.emit(movie);
  }
 
  editById(id: string) {
    this.idToEdit.emit(id);
  }
  
  deleteById(id: string) {
    this.idToDelete.emit(id);
  }


}


