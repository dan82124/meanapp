import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { BikeService } from '../../services/bike.service';
import { fadeInAnimation } from '../../animations/fade-in.animation';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
	animations: [fadeInAnimation],
	host: { '[@fadeInAnimation]': '' }
})
export class HomeComponent implements OnInit {

	constructor(
		private router: Router,
		private authService: AuthService,
		private bikeService: BikeService
		) { }

	ngOnInit() {
		if (this.authService.loggedIn()) {
			this.bikeService.getModelList();
			this.router.navigate(['/dashboard']);
		}
	}

}
