import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { CustomerService } from '../../services/customer.service';
import { RentalService } from '../../services/rental.service';
import { BikeService } from '../../services/bike.service';
import { Bike } from '../../shared/bike';
import { Customer }  from '../../shared/customer';
import { Rental }  from '../../shared/rental';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rentals: Rental[];
  rental: Rental = new Rental();
  tax: number = 0;
  subTotal: number = 0;
  total: number = 0;
  editDate: Date;
  inBikes: Bike[] = [];
  outBikes: Bike[] = [];
  selectedBikes: Bike[] = [];
  cust: Customer = new Customer();
  currentTime: Date;
  selectAll: Boolean = false;

  constructor(
    private customerService: CustomerService,
    private bikeService: BikeService,
    private rentalService: RentalService,
    private flashMessage: FlashMessagesService,
    private router: Router) { }

  ngOnInit() {
    this.rentalService.getActiveRentals().subscribe(data => {
      this.rentals = data.msg;
    }, err => {
      console.log(err);
      return false;
    });
  }

  getCustId() {
    let query = {
      name: this.cust.name.toUpperCase()
    }

    this.customerService.getCustId(query).subscribe(data => {
      if (data.success) {
        this.startRental(data.msg);
      } else {
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger'});
      }
    }, err => {
      console.log(err);
      return false;
    }); 
  }

  startRental(cust) {
    let start = {
      customerId: cust._id,
      customerName: cust.name
    }
    this.rentalService.startRental(start).subscribe(data => {
      if (data.success) {
        console.log(data);
        this.flashMessage.show("Rental created for: " + this.cust.name.toUpperCase(), {cssClass: 'alert-success'});
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
    this.rentalService.delRental(del).subscribe(data => {
      if (data.success) {
        this.flashMessage.show("Rental " + rental._id + " deleted", {cssClass: 'alert-success'});
        this.ngOnInit();
      } else {
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger'});
        this.ngOnInit();
      }
    }, err => {
      console.log(err);
      return false;
    }); 
  }

  onAddBike(rental) {
    this.clearSelectedBikes();
    this.cust._id = rental.customerId;
    this.cust.name = rental.customerName;
    this.rental._id = rental._id;
    this.rental.date = new Date(rental.date);
    this.rental.bikeId = rental.bikeId;

    this.bikeService.bikeByStatus({status: "Available"}).subscribe(data => {
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
      rentalId: this.rental._id,
      bikes: this.selectedBikes
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
    this.clearSelectedBikes();
    this.cust._id = rental.customerId;
    this.cust.name = rental.customerName;
    this.rental._id = rental._id;
    this.rental.date = new Date(rental.date);
    this.rental.bikeId = rental.bikeId;

    let rented = {
      status: this.rental._id
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
      rentalId: this.rental._id,
      bikes: this.selectedBikes
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

  onRetBike(rental) {
    this.clearSelectedBikes();
    this.cust._id = rental.customerId;
    this.cust.name = rental.customerName;
    this.rental._id = rental._id;
    this.rental.date = new Date(rental.date);
    this.rental.bikeId = rental.bikeId;
    this.rental.tax = rental.tax;
    this.rental.total = rental.total;

    this.currentTime = new Date();
    let duration = Math.round((this.currentTime.getTime() - this.rental.date.getTime())/(1000*60));
    this.rental.duration = duration;

    let rented = {
      status: this.rental._id
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

  onRetBikeSubmit() {
    this.rental.status = this.selectedBikes.length !== this.outBikes.length;

    let bikeCostDetails = new Array();
    for (let bike = 0; bike < this.selectedBikes.length; bike++) {
      let bikeCost = this.rentalService.calcPrice(this.selectedBikes[bike], this.rental.duration);
      let bikeTax = this.rentalService.calcTax(bikeCost);
      let bikeTotal = bikeCost + bikeTax;

      let bikeCostDetail = {
        bike: this.selectedBikes[bike],
        subTotal: bikeCost,
        tax: bikeTax,
        discount: 0,
        total: bikeTotal
      }
      bikeCostDetails.push(bikeCostDetail);
      this.subTotal += bikeCost;
      this.tax += bikeTax;
      this.total += bikeTotal;
    }

    this.rentalService.returnDetails = {
      rental: this.rental,
      cust: this.cust,
      bikeCostDetails: bikeCostDetails,
      bikes: this.selectedBikes,
      endDate: this.currentTime,
      taxTotal: this.tax,
      subTotal: this.subTotal,
      total: this.total
    }

    this.router.navigate(['/checkout']);
  }

  onEditRental(rental) {
    this.cust._id = rental.customerId;
    this.rental._id = rental._id;
    this.rental.date = new Date(rental.date);
    this.rental.bikeId = rental.bikeId;
    this.editDate = new Date(rental.date);
  }

  resetEdit() {
    this.editDate = this.rental.date;
  }

  editToCurrent() {
    this.editDate = new Date();
  }

  onEditSubmit() {
    let edit = {
      rentalId: this.rental._id,
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
    let index = this.selectedBikes.indexOf(bike);
    if (index === -1) {
      this.selectedBikes.push(bike);
    } else {
      this.selectedBikes.splice(index, 1);
    }
    console.log(this.selectedBikes);
  }

  selectAllBikes() {
    this.selectAll = !this.selectAll;
    if (this.selectAll) {
      for (let bike = 0; bike < this.outBikes.length; bike++) {
        let index = this.selectedBikes.indexOf(this.outBikes[bike]);
        if (index === -1) {
          this.selectedBikes.push(this.outBikes[bike]);
        }
      }
      document.getElementById('all').innerHTML = 'Deselect All';
    } else {
      this.clearSelectedBikes();
      document.getElementById('all').innerHTML = 'Select All';
    }
  }

  clearSelectedBikes() {
    this.selectAll = false;
    this.selectedBikes.splice(0, this.selectedBikes.length);
    this.subTotal = 0;
    this.tax = 0;
    this.total = 0;
    document.getElementById('all').innerHTML = 'Select All';
  }

  clearCustInfo() {
    this.cust.name = "";
    this.cust._id = null;
  }
}
