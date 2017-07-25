import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { BikeService } from '../../services/bike.service';
import { RentalService } from '../../services/rental.service';
import { Bike } from '../../shared/bike';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	user: Object;
	list: Object;
  bikefilter: Bike = new Bike();
  totalBikeCount: Number;
  availBikeCount: Number;
  rentalCount: Number;

  constructor(
  	private bikeService: BikeService,
    private rentalService: RentalService,
  	private authService: AuthService,
  	private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  	this.authService.getProfile().subscribe(profile => {
  		this.user = profile.user;
  	}, err => {
  		console.log(err);
  		return false;
  	});

  	this.bikeService.getBikeList().subscribe(data => {
  		this.list = data.msg;
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
    }, err => {
      console.log(err);
      return false;
    });    
  }

}
