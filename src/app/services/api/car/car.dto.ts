export interface CarGetAllDto {
    page: number;
    pageSize: number;
    site: string;
    order: string[];
    onlyWithPhoto: boolean;
    brand?: string;
}

export interface CarGetOneDto {
    id: string;
    site: string;
}

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

export interface CarCreateFakeDto {
    total: number;
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
    info?: string;
}
