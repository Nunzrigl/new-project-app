import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingPage } from './rating.component';





@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  
  ],
  declarations: [RatingPage],
  exports: [RatingPage]
})
export class RatingModule {
constructor(){
  
}

}





