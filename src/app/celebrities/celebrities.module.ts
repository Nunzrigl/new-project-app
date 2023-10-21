import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CelebritiesPage } from './celebrities.page';


import { CelebritiesPageRoutingModule } from './celebrities-routing.module';
import { CelebrityListPage } from './celebrities-list/celebrity-list.page';
import { CelebrityDetailsPage } from './details/details.page';
import { EditPage } from './edit/edit.page';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  
    CelebritiesPageRoutingModule
  ],
  declarations: [CelebritiesPage, CelebrityListPage, CelebrityDetailsPage, EditPage]
})
export class CelebritiesPageModule {}
