export interface BrandCreateDto {
  name: string;
  country: string;
  image: string;
}

export interface BrandUpdateDto {
  _id: string;
  name: string;
  country: string;
  image: string;
}
