import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';


@Injectable()
export class CustomerService {

  constructor(private http: Http) { }

	getCustList() {
		let headers = new Headers();
  	headers.append('Content-Type', 'application/json');
  	return this.http.get('customers/list', {headers: headers}).map(res => res.json());
	}

	getCustId(name) {
		let headers = new Headers();
  	headers.append('Content-Type', 'application/json');
  	return this.http.post('customers/find', name, {headers: headers}).map(res => res.json());		
	}

	delCustomer(custId) {
		let headers = new Headers();
  	headers.append('Content-Type', 'application/json');
  	return this.http.post('customers/del', custId, {headers: headers}).map(res => res.json());	
	}

	editCustomer(cust) {
		let headers = new Headers();
  	headers.append('Content-Type', 'application/json');
  	return this.http.post('customers/update', cust, {headers: headers}).map(res => res.json());	
	} 
}
