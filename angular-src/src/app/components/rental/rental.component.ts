import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { CustomerService } from '../../services/customer.service';
import { RentalService } from '../../services/rental.service';
import { BikeService } from '../../services/bike.service';
import { Bike } from '../../shared/bike';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
	rentals: Object;
  rentalId: String;
  rentalDate: Date;
  editDate: Date;
  rentalBikes: Number[];
  inBikes: Bike[] = new Array<Bike>();
  outBikes: Bike[] = new Array<Bike>();
  selectedBikes: Number[] = new Array<Number>();

  custId: Object;
  custFname: String;
  custLname: String;

  constructor(
    private customerService: CustomerService,
    private bikeService: BikeService,
  	private rentalService: RentalService,
  	private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  	this.rentalService.getRentalList().subscribe(data => {
  		this.rentals = data.msg;
  	}, err => {
  		console.log(err);
  		return false;
  	});
  }

  getCustId() {
    let query = {
      fname: this.custFname.toUpperCase(),
      lname: this.custLname.toUpperCase()
    }

    this.customerService.getCustId(query).subscribe(data => {
      if (data.success) {
        this.startRental(data.msg._id);
      } else {
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger'});
      }
    }, err => {
      console.log(err);
      return false;
    }); 
  }

  startRental(custId) {
    let start = {
      customerId: custId
    }
    this.rentalService.startRental(start).subscribe(data => {
      if (data.success) {
        console.log(data);
        this.flashMessage.show("Rental created for: " + this.custFname.toUpperCase() + " " + this.custLname.toUpperCase(), {cssClass: 'alert-success'});
        this.ngOnInit();
      } else {
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger'});
      }
    }, err => {
      console.log(err);
      return false;
    }); 
  }

  onDelRental(rental) {
    let del = {
      customerId: rental.customerId,
      rentalId: rental._id,
      bikeId: rental.bikeId
    }
    console.log(del);
    this.rentalService.delRental(del).subscribe(data => {
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

  onAddBike(rental) {
    this.custId = rental.customerId;
    this.rentalId = rental._id;
    this.rentalDate = new Date(rental.date);
    this.rentalBikes = rental.bikeId;

    this.bikeService.bikeByStatus({status: "in"}).subscribe(data => {
      if (data.success) {
        this.inBikes = data.msg;
      } else {
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger'});
      }
    }, err => {
      console.log(err);
      return false;
    });
  }

  onAddBikeSubmit() {
    let add = {
      rentalId: this.rentalId,
      bikeId: this.selectedBikes
    }
    console.log(add);
    this.rentalService.addBike(add).subscribe(data => {
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

  onDelBike(rental) {
    this.custId = rental.customerId;
    this.rentalId = rental._id;
    this.rentalDate = new Date(rental.date);
    this.rentalBikes = rental.bikeId;

    let rented = {
      status: this.rentalId
    }

    this.bikeService.bikeByStatus(rented).subscribe(data => {
      if (data.success) {
        this.outBikes = data.msg;
      } else {
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger'});
      }
    }, err => {
      console.log(err);
      return false;
    });
  }

  onDelBikeSubmit() {
    let del = {
      rentalId: this.rentalId,
      bikeId: this.selectedBikes
    }
    console.log(del);
    this.rentalService.removeBike(del).subscribe(data => {
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

  onEditRental(rental) {
    this.custId = rental.customerId;
    this.rentalId = rental._id;
    this.rentalDate = new Date(rental.date);
    this.rentalBikes = rental.bikeId;
    this.editDate = new Date(rental.date);
  }

  resetEdit() {
    this.editDate = this.rentalDate;
    document.getElementById("rentalDate").nodeValue = this.rentalDate.toLocaleString();
  }

  onEditSubmit() {
    let edit = {
      rentalId: this.rentalId,
      date: new Date(this.editDate).toISOString()
    }

    console.log(edit);
    this.rentalService.changeDate(edit).subscribe(data => {
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

  updateChecked(bike) {
    let index = this.selectedBikes.indexOf(bike._id);
    if (index === -1) {
      this.selectedBikes.push(bike._id);
    } else {
      this.selectedBikes.splice(index, 1);
    }
    console.log(this.selectedBikes);
  }

  clearSelectedBikes() {
    this.selectedBikes.splice(0, this.selectedBikes.length);
  }

  clearCustInfo() {
    this.custFname = "";
    this.custLname = "";
    this.custId = null;
  }
}
