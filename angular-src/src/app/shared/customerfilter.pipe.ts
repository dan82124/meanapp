import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cfilter',
  pure: false
})

export class CustomerFilterPipe implements PipeTransform {

  transform(customers: any, query: any): any {
    if (!customers || !query) return customers;

    return customers.filter((cust)=> {
      for (let field in query) {
        if (query[field] && cust[field]) {
          if (field === 'name' || field === 'info') {
            if (cust[field].toUpperCase().indexOf(query[field].toUpperCase()) === -1) {
              return false;
            }
          } else if (field === 'rentalId') {
            let found = false;
            for (let id in cust[field]) {
              if (cust[field][id].indexOf(query[field]) !== -1) {
                found = true;
              }
            }
            return found; 
          } else {
            if (cust[field].indexOf(query[field]) === -1) {
              return false;
            }
          }
        }
      }
      return true;
    });

  }
}
