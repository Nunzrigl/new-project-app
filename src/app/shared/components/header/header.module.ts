import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPage } from './header.page';





@NgModule({
  imports: [
    IonicModule,
    CommonModule,
   
    
  ],
  declarations: [HeaderPage],
  exports: [HeaderPage]
})
export class HeaderModule {}
