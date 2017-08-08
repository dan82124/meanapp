import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { BikeService } from './services/bike.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	constructor(
		private authService: AuthService,
		private bikeSerivce: BikeService) { }
	
	ngOnInit() {
		this.authService.getUserData();

		this.bikeSerivce.getModelList();
	}
}
