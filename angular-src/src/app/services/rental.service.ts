import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class RentalService {

	constructor(private http: Http) { }

	getRentalList() {
		let headers = new Headers();
  	headers.append('Content-Type', 'application/json');
  	return this.http.get('rentals/list', {headers: headers}).map(res => res.json());
	}

  getActiveRentals() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('rentals/active', {headers: headers}).map(res => res.json());
  }

  startRental(custId) {
  	let headers = new Headers();
  	headers.append('Content-Type', 'application/json');
  	return this.http.post('rentals/start', custId, {headers: headers}).map(res => res.json());
  }

  returnRental(rental) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('rentals/ret', rental, {headers: headers}).map(res => res.json());
  }

  delRental(rentId) {
  	let headers = new Headers();
  	headers.append('Content-Type', 'application/json');
  	return this.http.post('rentals/del', rentId, {headers: headers}).map(res => res.json());
  }

	addBike(rental) {
  	let headers = new Headers();
  	headers.append('Content-Type', 'application/json');
  	return this.http.post('rentals/add', rental, {headers: headers}).map(res => res.json());
  }

  removeBike(rental) {
  	let headers = new Headers();
  	headers.append('Content-Type', 'application/json');
  	return this.http.post('rentals/remove', rental, {headers: headers}).map(res => res.json());
  }

  changeDate(rental) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('rentals/date', rental, {headers: headers}).map(res => res.json());
  }
}
