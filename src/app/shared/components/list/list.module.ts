import { IonicModule } from '@ionic/angular';
import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPage } from './list.component';
import { OrderbyPipe } from 'src/app/shared/components/list/orderby.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from '../rating/rating.module';






@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RatingModule
  
  ],
  declarations: [ListPage, OrderbyPipe],
  exports: [ListPage, OrderbyPipe]
})
export class ListModule {

  @Input() selectedItemDetails : string = '';

constructor(){
  
}


}





