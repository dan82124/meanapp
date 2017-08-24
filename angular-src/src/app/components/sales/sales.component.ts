import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { RentalService } from '../../services/rental.service';
import { Rental } from '../../shared/rental';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  rentals: Rental[];
  date: Date = new Date();
  today: Date;
  totalRentals: number;
  avgRental: number;
  revenue: number;

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
      this.calcSales();
    }, err => {
      console.log(err);
      return false;
    });
  }

  changeDate(date) {
    let rentalDate = {
      date: date
    }
    console.log(rentalDate);

    this.rentalService.getRentalByDate(rentalDate).subscribe(data => {
      console.log(data);
      this.rentals = data.msg;
      this.calcSales();
    }, err => {
      console.log(err);
      return false;
    });
  }

  calcSales() {
    this.totalRentals = this.rentals.length;
    this.avgRental = 0;
    this.revenue = 0;
    for (let rental = 0; rental < this.rentals.length; rental++) {
      this.revenue += this.rentals[rental].total;
      this.revenue = Math.round((this.revenue)*100)/100;
    }
    if (this.totalRentals > 0) {
      this.avgRental = Math.round((this.revenue/this.totalRentals)*100)/100;
    }
  }
}
