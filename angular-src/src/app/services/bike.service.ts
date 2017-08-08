import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class BikeService {
  modelList: Object;

  constructor(private http: Http) { }

  getBikeList() {
  	let headers = new Headers();
  	headers.append('Content-Type', 'application/json');
  	return this.http.get('bikes/list', {headers: headers}).map(res => res.json());
  }

  addBike(bike) {
  	let headers = new Headers();
  	headers.append('Content-Type', 'application/json');
  	return this.http.post('bikes/add', bike, {headers: headers}).map(res => res.json());
  }

  delBike(id) {
  	let headers = new Headers();
  	headers.append('Content-Type', 'application/json');
  	return this.http.post('bikes/del', id, {headers: headers}).map(res => res.json());
  }

  editBike(bike) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('bikes/edit', bike, {headers: headers}).map(res => res.json());
  }

  countBike() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('bikes/count', {headers: headers}).map(res => res.json());
  }

  bikeByStatus(status) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('bikes/status', status, {headers: headers}).map(res => res.json());
  }

  getModelList() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.modelList = this.http.get('models/list', {headers: headers}).map(res => res.json());
  }

  addModel(model) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('models/add', model, {headers: headers}).map(res => res.json());
  }

  delModel(model) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('models/del', model, {headers: headers}).map(res => res.json());
  }

  updatePrice(model) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('bikes/update', model, {headers: headers}).map(res => res.json());
  }

  // bikeById(id) {
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.post('http://localhost:3000/bikes/id', id, {headers: headers}).map(res => res.json());
  // }

  // bikeByModel(model) {
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.post('http://localhost:3000/bikes/model', model, {headers: headers}).map(res => res.json());
  // }

  // bikeByPrice(price) {
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.post('http://localhost:3000/bikes/price', price, {headers: headers}).map(res => res.json());
  // }      
}
