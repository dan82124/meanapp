import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { fadeInAnimation } from '../../animations/fade-in.animation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(
    private validateService: ValidateService, 
    private authService: AuthService, 
    private flashMessage: FlashMessagesService,
    private router: Router
    ) { }

  ngOnInit() { }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    //Validate form
    if(!this.validateService.validateRegister(user)) {
      this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger'});
      return false;
    }

    if(!this.validateService.validateEmail(user.email)) {
      this.flashMessage.show('Please provide a valid email', {cssClass: 'alert-danger'});
      return false;
    }

    //Register user
    this.authService.registerUser(user).subscribe(data => {
      if(data.success) {
        this.flashMessage.show('You are now registered', {cssClass: 'alert-success'});
        this.router.navigate(['/login']);
      } else {
        this.flashMessage.show('Unsuccessful register', {cssClass: 'alert-danger'});
        this.router.navigate(['/register']);
      }
    });
  }

}
