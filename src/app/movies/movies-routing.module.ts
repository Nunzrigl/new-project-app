import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesPage } from './movies.page';
import { DetailsPage } from './details/details.page';
import { EditPage } from './edit/edit.page';
import { CreatePage } from './create/create.page';

const routes: Routes = [
  {
    path: 'create',
    component: CreatePage,
  },
  {
    path: 'edit/:id',
    component: EditPage,
  },
  {
    path: 'details/:id',
    component: DetailsPage,
  },
  {
    path: '',
    component: MoviesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesPageRoutingModule {}
