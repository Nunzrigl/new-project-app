import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { celebrities } from '../celebrities-interface/celebrities-interface';
import { CelebritiesService } from '../celebrities-services/celebrities.services';



@Component({
  selector: 'app-details',
  templateUrl: 'details.page.html',
  styleUrls: ['details.page.scss'],
})

export class CelebrityDetailsPage {
  celebrityId: number= 0;
  celebrity?: celebrities ;
  

  constructor(private route: ActivatedRoute, private readonly _router: Router, private _celebrities: CelebritiesService) {
    this.route.paramMap.subscribe(params => {
      if (params && params.get('id')) {
        const id = params.get('id');
        if (id) {
          this.celebrityId = +id;

           this.celebrity = this._celebrities.getById(this.celebrityId);
          console.log(this.celebrity);
        }
      }
    });
  }
  

  backToMovies(boolean: boolean) {
    this._router.navigate(['']);
  }

}