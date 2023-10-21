import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoviesPage } from './movies.page';


import { MoviesPageRoutingModule } from './movies-routing.module';
import { MovieListPage } from './movie-list/movie-list.page';
import { DetailsPage } from './details/details.page';
import { EditPage } from './edit/edit.page';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  
    MoviesPageRoutingModule
  ],
  declarations: [MoviesPage, MovieListPage, DetailsPage, EditPage ]
})
export class MoviesPageModule {}
