import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: 'searchbar.component.html',
  styleUrls: ['searchbar.component.css']
})
export class SearchComponent {
  searchbar = document.querySelector('ion-searchbar');
  

}