import { Car } from './car.model';

export class Brand {
  _id?: string;
  name: string;
  country: string;
  image: string;
  cars?: Car[]; // Virtual
  created?: string;
  updated?: string;
  constructor(data?: Brand) {
    this._id = data?._id;
    this.name = data?.name || '';
    this.country = data?.country || '';
    this.image = data?.image || '';
    this.cars = data?.cars || [];
    this.created = data?.created || '';
    this.updated = data?.updated || '';
  }
}
