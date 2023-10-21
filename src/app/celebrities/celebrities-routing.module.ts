import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CelebritiesPage } from './celebrities.page';
import { CelebrityDetailsPage } from './details/details.page';
import { EditPage } from './edit/edit.page';


const routes: Routes = [
  {
    path: 'edit/:id',
    component: EditPage,
  },
  {
    path: 'details/:id',
    component: CelebrityDetailsPage,
  },
  {
    path: '',
    component: CelebritiesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CelebritiesPageRoutingModule {}
