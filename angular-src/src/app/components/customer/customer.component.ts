import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
	customers: any;

  constructor(
  	private customerService: CustomerService,
  	private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  	this.customerService.getCustList().subscribe(data => {
  		this.customers = data.msg;
  	}, err => {
  		console.log(err);
  		return false;
  	});
  }

  onDelCust(cust) {
  	let del = {
  		id: cust._id
  	}

  	this.customerService.delCustomer(del).subscribe(data => {
  		if (data.success) {
  			this.flashMessage.show(data.msg, {cssClass: 'alert-success'});
  			this.ngOnInit();
  		} else {
  			this.flashMessage.show(data.msg, {cssClass: 'alert-danger'});
  		}
  	}, err => {
  		console.log(err);
  		return false;
  	});
  }
}
