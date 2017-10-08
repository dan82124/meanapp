import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { fadeInAnimation } from '../../animations/fade-in.animation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;

  constructor(
    private authService: AuthService,
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    }

    if(!this.validateService.validateLogin(user)) {
      this.flashMessage.show('Please enter a username and password', {cssClass: 'alert-danger'});
      return false;
    }

    this.authService.authenticateUser(user).subscribe(data => {
      if(data.success) {
        this.authService.storeUserData(data.token, data.user);
        this.flashMessage.show('Welcome ' + data.user.name, {cssClass: 'alert-success'});
        this.router.navigate(['/dashboard']);
      } else {
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger'});
        this.router.navigate(['/login']);
      }
    });
  }

}
