import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { RentalService } from '../../services/rental.service';
import { Rental } from '../../shared/rental';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
	rentals: Object;
	date: Date = new Date();
	today: Date;

  constructor(
  	private rentalService: RentalService,
  	private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  	this.today = new Date();
  	this.today.setHours(0,0,0,0);
  	let rentalDate = {
  		date: this.today
  	}
  	console.log(rentalDate);
  	this.rentalService.getRentalByDate(rentalDate).subscribe(data => {
  		console.log(data);
  		this.rentals = data.msg;
  	}, err => {
  		console.log(err);
  		return false;
  	});
  }

  changeDate(date){
  	let rentalDate = {
  		date: date
  	}
  	console.log(rentalDate);

  	this.rentalService.getRentalByDate(rentalDate).subscribe(data => {
  		console.log(data);
  		this.rentals = data.msg;
  	}, err => {
  		console.log(err);
  		return false;
  	});
  }
}
