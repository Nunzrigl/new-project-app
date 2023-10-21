import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'movies',
        loadChildren: () => import('../movies/movies.module').then(m => m.MoviesPageModule)
      },
      {
        path: 'celebrities',
        loadChildren: () => import('../celebrities/celebrities.module').then(m => m.CelebritiesPageModule)
      },
      {
        path: 'profilo',
        loadChildren: () => import('../profilo/profilo.module').then(m => m.ProfiloPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/movies',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/movies',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
