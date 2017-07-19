import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { BikeService } from '../../services/bike.service';
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
  model: String;

  constructor(
  	private bikeService: BikeService,
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
  }

}
