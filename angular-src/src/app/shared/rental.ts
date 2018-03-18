export class Rental {
  _id: String;
  customerId: String;
  customerName: String;
  bikeId: Number[];
  date: Date;
  endDate: Date;
  duration: Number;
  status: Boolean;
  discountUsed: Boolean;
  tax: Number;
  discount: Number;
  total: Number;
}
