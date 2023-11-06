import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfiloPage } from './profilo.page';


import { ProfiloPageRoutingModule } from './profilo-routing.module';
import { ProfiloCreatorePage } from './components/profilo-creatore.page';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    
    ProfiloPageRoutingModule
  ],
  declarations: [ProfiloPage, ProfiloCreatorePage]
})
export class ProfiloPageModule {}
