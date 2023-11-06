import { Component } from '@angular/core';


import {  Router } from '@angular/router';
import { celebrities } from './celebrities-interface/celebrities-interface';
import { CelebritiesService } from './celebrities-services/celebrities.services';
import { ListItem } from '../shared/components/interfaces/list.interface';

@Component({
  selector: 'app-celebrities',
  templateUrl: 'celebrities.page.html',
  styleUrls: ['celebrities.page.scss']
})
export class CelebritiesPage {
  
  celebrityList: ListItem[]=[];
  
  constructor(
    private readonly _celebritiesService: CelebritiesService,
    private readonly _route: Router) {
    
  }

  private _getList(){
    this._celebritiesService.getList().subscribe((celebrity :celebrities[])=> {
      this.celebrityList = celebrity.map((element: celebrities) => {
        return {
          id: element.id,
          name: element.name,
        };
      });
    });
  }

  ionViewWillEnter(){
    this._getList();
  }
  
 title='Celebrity';

 move(id: string){
  this._route.navigate(['tabs','celebrities','details', id] ); 
  
 }

 edit(id: string){
  this._route.navigate(['tabs','celebrities', 'edit', id] ); 
 }

 create(){
  this._route.navigate(['tabs', 'celebrities', 'create']);
}

delete(id: string){
  this._celebritiesService.delete(id).subscribe(()=>{
    this._getList()
  });
 }
}
