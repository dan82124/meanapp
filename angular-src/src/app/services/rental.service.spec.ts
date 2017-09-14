/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RentalService } from './rental.service';
import { Bike } from '../shared/bike';
import { HttpModule } from '@angular/http';

describe('RentalService', () => {
  
  let bike = new Bike();
  bike._id = 1000;
  bike.model = 'Cruiser';
  bike.price = 5;
  bike.status = 'Available';

  beforeEach(() => {
    TestBed.configureTestingModule({
    	imports: [HttpModule],
      providers: [RentalService]
    });
  });

  it('should ...', inject([RentalService], (service: RentalService) => {
    expect(service).toBeTruthy();
  }));

  it('should output 5 for minimum charge for duration under 60', inject([RentalService], (service: RentalService) => {
    expect(service.calcPrice(bike, 0)).toBe(5);
  }));

  it('should output 10 for duration of 120', inject([RentalService], (service: RentalService) => {
    expect(service.calcPrice(bike, 120)).toBe(10);
  }));

  it('should output 15 for half day charge of duration higher than/equal to 180 and less than/equalto 240', inject([RentalService], (service: RentalService) => {
    expect(service.calcPrice(bike, 200)).toBe(15);
  }));

  it('should output 21.75 for duration of 321', inject([RentalService], (service: RentalService) => {
    expect(service.calcPrice(bike, 321)).toBe(21.75);
  }));

  it('should output 30 for full day charge of duration higher than 360', inject([RentalService], (service: RentalService) => {
    expect(service.calcPrice(bike, 560)).toBe(30);
  }));
});
