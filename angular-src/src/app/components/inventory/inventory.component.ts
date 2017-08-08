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
	list: Bike[];
  currBike: Bike = new Bike();
  prevBike: Bike = new Bike();
  bikefilter: Bike = new Bike();
  bikeModels: String[] = ["Cruiser", "MTN", "Electric", "Tandem", "Kids", "Trailer"];
  modelName: String;
  modelPrice: Number;

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
    this.currBike = new Bike();
  }

  onAddSubmit() {
    this.currBike.status = "in";
  	this.bikeService.addBike(this.currBike).subscribe(data => {
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
  	this.currBike._id = bike._id;
  	this.currBike.model = bike.model;
  	this.currBike.status = bike.status;
  	this.currBike.price = bike.price;

  	this.prevBike._id = bike._id;
  	this.prevBike.model = bike.model;
  	this.prevBike.status = bike.status;
  	this.prevBike.price = bike.price;
  }

  undoEdit() {
  	this.currBike._id = this.prevBike._id;
  	this.currBike.model = this.prevBike.model;
  	this.currBike.status = this.prevBike.status;
  	this.currBike.price = this.prevBike.price;
  }

  onEditSubmit() {
    this.bikeService.editBike(this.currBike).subscribe(data => {
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
    this.bikeService.delBike(bike).subscribe(data => {
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

  onAddModelSubmit() {
    console.log(this.modelName + " " + this.modelPrice);
  }
}
