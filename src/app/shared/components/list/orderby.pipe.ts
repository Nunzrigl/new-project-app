import { Pipe, PipeTransform } from '@angular/core';
import { ListItem } from '../interfaces/list.interface';

@Pipe({
  name: 'orderby'
})
export class OrderbyPipe implements PipeTransform {

  transform(value: ListItem[]): ListItem[]{
    if (!value || value.length === 0) {
      return value; // Restituisci la lista inalterata se è vuota o non definita
    }

    // Ordina la lista in base al rating in ordine decrescente
    return value.sort((a, b) => (b.rating || 0) - (a.rating || 0));
  }

}
