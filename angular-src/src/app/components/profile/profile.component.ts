import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	user: Object;

  constructor(
  	private authService: AuthService,
  	private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.user = this.authService.user;
  }

}
