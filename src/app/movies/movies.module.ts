import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoviesPage } from './movies.page';


import { MoviesPageRoutingModule } from './movies-routing.module';

import { DetailsPage } from './details/details.page';
import { EditPage } from './edit/edit.page';
import { CreatePage } from './create/create.page';
import { HeaderModule } from '../shared/components/header/header.module';
import { ListModule } from '../shared/components/list/list.module';
import { ListPage } from '../shared/components/list/list.component';
import { RatingModule } from '../shared/components/rating/rating.module';
import { ColoreTitoliDirective } from '../colore-titoli.directive';




@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule,
    MoviesPageRoutingModule,
    ListModule,
    RatingModule
  ],
  declarations: [MoviesPage,  DetailsPage, EditPage, CreatePage, ColoreTitoliDirective],
  providers:[ListPage]
})
export class MoviesPageModule {}
