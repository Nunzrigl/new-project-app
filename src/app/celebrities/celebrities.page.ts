import { Component } from '@angular/core';


import {  Router } from '@angular/router';
import { celebrities } from './celebrities-interface/celebrities-interface';
import { CelebritiesService } from './celebrities-services/celebrities.services';

@Component({
  selector: 'app-celebrities',
  templateUrl: 'celebrities.page.html',
  styleUrls: ['celebrities.page.scss']
})
export class CelebritiesPage {
  
  constructor(private readonly _celebritiesService: CelebritiesService, private readonly _route: Router) {
      this.celebrities = this._celebritiesService.getList();
  }

 celebrities : celebrities[]= []; 
   

ionViewWillEnter(){
  this._celebritiesService.getList();
}

 move(id: number){
  this._route.navigate(['tabs','celebrities','details', id] ); 
  
 }

 edit(id: number){
  this._route.navigate(['tabs','celebrities', 'edit', id] ); 
 }
}
