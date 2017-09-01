import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { BikeService } from '../../services/bike.service';
import { RentalService } from '../../services/rental.service';
import { Bike } from '../../shared/bike';
import { Rental }  from '../../shared/rental';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	bikeList: Bike[];
  rentalList: Rental[];
  bikefilter: Bike = new Bike();
  totalBikeCount: Number;
  availBikeCount: Number;
  rentalCount: Number;

  constructor(
  	private bikeService: BikeService,
    private rentalService: RentalService,
  	private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  	this.bikeService.getBikeList().subscribe(data => {
      this.bikeList = data.msg;
      this.bikefilter.status = "Available";
  	}, err => {
  		console.log(err);
  		return false;
  	});

    this.bikeService.countBike().subscribe(data => {
      this.availBikeCount = data.msg.inBikes;
      this.totalBikeCount = data.msg.totalBikes;
    }, err => {
      console.log(err);
      return false;
    });

    this.rentalService.getActiveRentals().subscribe(data => {
      this.rentalCount = data.msg.length;
      if(this.rentalCount !== 0) {
        this.rentalList = data.msg;    
      }
    }, err => {
      console.log(err);
      return false;
    });    
  }

}
