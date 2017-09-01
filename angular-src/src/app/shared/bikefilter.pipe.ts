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
          if (field === '_id') { 
            if (Math.floor(bike[field]/1000) !== query[field]) {
              return false;
            }
          } else if (field === 'status' || field === 'model') {
            if (bike[field].toLowerCase().indexOf(query[field].toLowerCase()) === -1) {
              return false;
            }
          } else if (field === 'price') {
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
