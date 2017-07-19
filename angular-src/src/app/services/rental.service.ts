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
  	return this.http.get('http://localhost:3000/rentals/list', {headers: headers}).map(res => res.json());
	}

  startRental(custId) {
  	let headers = new Headers();
  	headers.append('Content-Type', 'application/json');
  	return this.http.post('http://localhost:3000/rentals/start', custId, {headers: headers}).map(res => res.json());
  }

  delRental(rentId) {
  	let headers = new Headers();
  	headers.append('Content-Type', 'application/json');
  	return this.http.post('http://localhost:3000/rentals/del', rentId, {headers: headers}).map(res => res.json());
  }

	addBike(rental) {
  	let headers = new Headers();
  	headers.append('Content-Type', 'application/json');
  	return this.http.post('http://localhost:3000/rentals/add', rental, {headers: headers}).map(res => res.json());
  }

  removeBike(rental) {
  	let headers = new Headers();
  	headers.append('Content-Type', 'application/json');
  	return this.http.post('http://localhost:3000/rentals/remove', rental, {headers: headers}).map(res => res.json());
  }

  changeDate(rental) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/rentals/date', rental, {headers: headers}).map(res => res.json());
  }
}
