import { Component, Input } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { celebrities } from '../celebrities-interface/celebrities-interface';
import { CelebritiesService } from '../celebrities-services/celebrities.services';



@Component({
  selector: 'app-details',
  templateUrl: 'details.page.html',
  styleUrls: ['details.page.scss'],
})

export class CelebrityDetailsPage {
  celebrityId: string='';
  celebrity?: celebrities;
 
  
  @Input() title ='Celebrity';

  constructor(private route: ActivatedRoute, private readonly _router: Router, private _celebrities: CelebritiesService) {
    this.route.paramMap.subscribe(params => {
      if (params && params.get('id')) {
        const id = params.get('id');
        if (id) {
          this.celebrityId = id;
          
          this._celebrities.getById(this.celebrityId).subscribe((result: celebrities) => {
            this.celebrity = result;
            console.log(this.celebrity); 
          })
        }
      }
    });

   
  }
  

  backToMovies(boolean: boolean) {
    this._router.navigate(['']);
  }

}