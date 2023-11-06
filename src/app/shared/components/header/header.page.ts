import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.page.html',
  styleUrls: ['header.page.scss']
})


export class HeaderPage {
  @Input() title ='';
  constructor() {}

  
}
