
export interface CarCreateDto {
    name: string;
    driver: any; // UserI
    brand: any; // BrandI
    traction: string;
    cv: number;
    cc: number;
    image: string;
    stock: boolean;
}

export interface CarUpdateDto {
    _id: string;
    name?: string;
    driver?: any; // UserI
    brand?: any; // BrandI
    traction?: string;
    cv?: number;
    cc?: number;
    stock?: boolean;
    image?: string;
    info?: string;
}
