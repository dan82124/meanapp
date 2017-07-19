import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { BikeService } from '../../services/bike.service';
import { Bike } from '../../shared/bike';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
	list: Object;
	id: String;
	model: String;
	status: String;
	price: String;
	prev_id: String;
	prev_model: String;
	prev_status: String;
	prev_price: String;
  bikefilter: Bike = new Bike();

  constructor(
  	private bikeService: BikeService,
  	private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  	this.bikeService.getBikeList().subscribe(list => {
  		this.list = list.msg;
  	}, err => {
  		console.log(err);
  		return false;
  	});
  }

  clearBikeInfo() {
  	this.id = null;
  	this.model = null;
  	this.status = null;
  	this.price = null;
  }

  onAddBike() {
  	let add = {
  		_id: this.id,
      model: this.model,
      status: this.status,
      price: this.price
  	}
  	
  	this.bikeService.addBike(add).subscribe(data => {
  		console.log(data);
  		if (data.success) {
  			this.flashMessage.show(data.msg, {cssClass: 'alert-success'});
  			this.ngOnInit();
  		} else {
  			this.flashMessage.show(data.msg, {cssClass: 'alert-danger'});
  		}
  		this.clearBikeInfo();
  	}, err => {
  		console.log(err);
  		return false;
  	});
  }

  onEditBike(bike) {
  	this.id = bike._id;
  	this.model = bike.model;
  	this.status = bike.status;
  	this.price = bike.price;

  	this.prev_id = bike._id;
  	this.prev_model = bike.model;
  	this.prev_status = bike.status;
  	this.prev_price = bike.price;
  }

  undoEdit() {
  	this.id = this.prev_id;
  	this.model = this.prev_model;
  	this.status = this.prev_status;
  	this.price = this.prev_price;
  }

  onEditSubmit() {
  	let edit = {
  		_id: this.id,
      model: this.model,
      status: this.status,
      price: this.price
  	}
  	console.log(edit);

  	this.bikeService.editBike(edit).subscribe(data => {
  		console.log(data);
  		if (data.success) {
  			this.flashMessage.show(data.msg, {cssClass: 'alert-success'});
  			this.ngOnInit();
  		} else {
  			this.flashMessage.show(data.msg, {cssClass: 'alert-danger'});
  		}
  		this.clearBikeInfo();
  	}, err => {
  		console.log(err);
  		return false;
  	});
  }

  onDelBike(bike) {
  	let del = {
  		_id: bike._id
  	}
    
  	this.bikeService.delBike(del).subscribe(data => {
  		console.log(data);
  		if (data.success) {
  			this.flashMessage.show(data.msg, {cssClass: 'alert-success'});
  			this.ngOnInit();
  		} else {
  			this.flashMessage.show(data.msg, {cssClass: 'alert-danger'});
  		}
  		this.clearBikeInfo();
  	}, err => {
  		console.log(err);
  		return false;
  	});
  }
}
