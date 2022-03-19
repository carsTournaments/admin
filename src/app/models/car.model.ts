import { Tournament } from './tournament.model';

export class Car {
  _id?: string;
  name: string;
  driver: any; // UserI
  brand: any; // BrandI
  model: string;
  traction: string;
  cv: number;
  cc: number;
  image: string;
  stock: boolean;
  info: string;
  tournaments?: Tournament[];
  created?: string;
  updated?: string;

  constructor(data?: Car) {
    this._id = data?._id;
    this.name = data?.name || '';
    this.driver = data?.driver || '';
    this.brand = data?.brand || '';
    this.model = data?.model || '';
    this.traction = data?.traction || '';
    this.cv = data?.cv || 0;
    this.cc = data?.cc || 0;
    this.image = data?.image || '';
    this.stock = data?.stock || false;
    this.info = data?.info || '';
    this.tournaments = data?.tournaments || [];
    this.created = data?.created || '';
    this.updated = data?.updated || '';
  }
}
