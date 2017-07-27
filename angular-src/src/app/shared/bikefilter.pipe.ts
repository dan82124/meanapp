import { Pipe, PipeTransform } from '@angular/core';
import { Bike } from './bike';

@Pipe({
  name: 'bfilter',
  pure: false
})

export class BikeFilterPipe implements PipeTransform {

  transform(bikes: any, query: Bike): any {
    if (!bikes || !query) return bikes;

    return bikes.filter((bike)=> {
      for (let field in query) {
        if (query[field]) {
          if (typeof query[field] === 'string') {
            if (bike[field].toLowerCase().indexOf(query[field].toLowerCase()) === -1) {
              return false;
            }
          } else if (typeof query[field] === 'number') {
            if (bike[field] !== query[field]) {
              return false;
            }
          }
        }
      }
      return true;
    });
  }

}
