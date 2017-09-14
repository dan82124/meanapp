import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class RentalService {
  returnDetails: any;
  tax: number = 0.12;

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

  getRentalByDate(date) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('rentals/date', date, {headers: headers}).map(res => res.json());
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
    return this.http.post('rentals/edit', rental, {headers: headers}).map(res => res.json());
  }

   calcPrice(bike, duration): number {
    let price, discountDuration = 0;

    if (duration < 60) {
      //Minimum 1 Hour Charge
      discountDuration = 60;
    } else if (duration >= 60 && duration < 180) {
      //Normal Pricing (Below 3 Hours)
      discountDuration = duration;
    } else if (duration <= 240 && duration >= 180) {
      //Discount Pricing Between 3-4 Hours
      discountDuration = 180;
    } else if (duration < 360 && duration > 240) {
      //Discount Pricing For Under 6 Hours But Above 4 Hours
      discountDuration = (duration - 240) + 180;
    } else {
      //Full Day Pricing (6+ Hours)
      discountDuration = 360;
    }

    price = (bike.price/60) * discountDuration;

    return price;
  }

  calcTax(subtotal): number {
    let tax = 0;

    tax = subtotal * this.tax;

    return tax;
  }

  print(pageID) {
    console.log("printing");
    let printContents, popupWin;
    printContents = document.getElementById(pageID).innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Bike Rental</title>
          <link rel="stylesheet" href="https://bootswatch.com/slate/bootstrap.min.css">
        </head>
        <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
  }
}
