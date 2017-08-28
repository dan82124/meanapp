import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { BikeService } from '../../services/bike.service';
import { Bike } from '../../shared/bike';
import { Model } from '../../shared/model';

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
  selectModel: Model = new Model();

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

  clearModelInfo() {
    this.selectModel = new Model();
  }

  onAddSubmit() {
    this.currBike.status = "Available";
    this.currBike.model = this.selectModel.name;
    this.currBike.price = this.selectModel.price;

    this.bikeService.addBike(this.currBike).subscribe(data => {
      console.log(data);
      if (data.success) {
        this.flashMessage.show(data.msg, {cssClass: 'alert-success'});
        this.ngOnInit();
      } else {
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger'});
      }
      this.clearBikeInfo();
      this.clearModelInfo();
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

  updateEdit(modelName) {
    for (let model in this.bikeService.modelList) {
      if (this.bikeService.modelList[model].name === modelName) {
        this.currBike.price = this.bikeService.modelList[model].price;
      }
    }
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
    this.bikeService.addModel(this.selectModel).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg.name + " model added with price: " + data.msg.price, {cssClass: 'alert-success'});
        this.bikeService.getModelList();
      } else {
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger'});
      }
      this.clearModelInfo();
    }, err => {
      console.log(err);
      return false;
    });
  }

  onDelModelSubmit() {
    this.bikeService.delModel(this.selectModel).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, {cssClass: 'alert-success'});
        this.bikeService.getModelList();
      } else {
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger'});
      }
      this.clearModelInfo();
    }, err => {
      console.log(err);
      return false;
    });
  }

  onEditModelSubmit() {
    this.bikeService.updatePrice(this.selectModel).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, {cssClass: 'alert-success'});
      } else {
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger'});
      }
      this.clearModelInfo();
    }, err => {
      console.log(err);
      return false;
    });

    this.bikeService.getModelList();
    this.ngOnInit();
  }
}
