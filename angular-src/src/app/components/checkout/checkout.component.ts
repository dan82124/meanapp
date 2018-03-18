import { Component, OnInit } from '@angular/core';
import { RentalService } from '../../services/rental.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(
    private rentalService: RentalService,
    private router: Router,
    private flashMessage: FlashMessagesService) { }

  ngOnInit() {

  }

  applyDiscount() {
    console.log(this.rentalService.returnDetails);
    this.rentalService.returnDetails.rental.discountUsed = true;
    this.rentalService.returnDetails.total = this.rentalService.returnDetails.total - 5.0;

    console.log(this.rentalService.returnDetails.rental.discountUsed);
  }

  goBack() {
    this.router.navigate(['/rental']);
  }

  onRetSubmit() {
    this.rentalService.returnRental(this.rentalService.returnDetails).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, {cssClass: 'alert-success'});
        this.router.navigate(['/rental']);
      } else {
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger'});
      }
    }, err => {
      console.log(err);
      return false;
    });
  }
}