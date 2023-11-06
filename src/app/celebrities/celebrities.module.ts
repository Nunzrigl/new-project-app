import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CelebritiesPage } from './celebrities.page';


import { CelebritiesPageRoutingModule } from './celebrities-routing.module';
import { CelebrityDetailsPage } from './details/details.page';
import { EditPage } from './edit/edit.page';
import { CreatePage } from './create/create.page';
import { HeaderModule } from '../shared/components/header/header.module';
import { ListModule } from '../shared/components/list/list.module';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule,
     ListModule, 
    CelebritiesPageRoutingModule
  ],
  declarations: [CelebritiesPage, CelebrityDetailsPage, EditPage, CreatePage]
})
export class CelebritiesPageModule {}
