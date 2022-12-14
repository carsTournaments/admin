import { Image } from './image.model';
import { Tournament } from './tournament.model';

export class Car {
    _id?: string;
    driver: any; // UserI
    brand: any; // BrandI
    model: string;
    fuel: string;
    traction: string;
    cv: number;
    cc: number;
    stock: boolean;
    info: string;
    year: number;
    tournaments?: Tournament[];
    images?: Image[];
    created?: string;
    updated?: string;

    constructor(data?: Car) {
        this._id = data?._id;
        this.driver = data?.driver || '';
        this.brand = data?.brand || '';
        this.model = data?.model || '';
        this.fuel = data?.fuel || '';
        this.traction = data?.traction || '';
        this.cv = data?.cv || 0;
        this.cc = data?.cc || 0;
        this.stock = data?.stock || false;
        this.info = data?.info || '';
        this.year = data?.year || 0;
        this.tournaments = data?.tournaments || [];
        this.images = data?.images || [];
        this.created = data?.created || '';
        this.updated = data?.updated || '';
    }
}
