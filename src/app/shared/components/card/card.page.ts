import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-component',
  templateUrl: 'card.page.html',
  styleUrls: ['card.page.scss']
})


export class CardPage {
  @Input() title ='Card';
  constructor() {}

  
}
