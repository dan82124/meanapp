import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { CustomerService } from '../../services/customer.service';
import { Customer }  from '../../shared/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
	customers: Customer[];
  customerfilter: Customer = new Customer();
  currCust: Customer = new Customer();
  prevCust: Customer = new Customer();

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

  onEditCust(cust) {
    this.currCust._id = cust._id;
    this.currCust.name = cust.name;
    this.currCust.info = cust.info;

    this.prevCust._id = cust._id;
    this.prevCust.name = cust.name;
    this.prevCust.info = cust.info;
  }

  onEditSubmit() {
    let edit = {
      id: this.currCust._id,
      name: this.currCust.name,
      info: this.currCust.info
    }

    this.customerService.editCustomer(edit).subscribe(data => {
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

  resetEdit() {
    this.currCust.info = this.prevCust.info;
  }
}
