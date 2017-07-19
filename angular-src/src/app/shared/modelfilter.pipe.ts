import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modelfilter'
})

export class ModelFilterPipe implements PipeTransform {

  transform(bikes: any, query: any): any {
    if (!bikes || !query) return bikes;

    return bikes.filter((bike)=> {
      if (typeof query === 'string') {
          if (bike.model.toLowerCase().indexOf(query.toLowerCase()) === -1) {
            return false;
          }
      }
      return true;
    })
  }

}
