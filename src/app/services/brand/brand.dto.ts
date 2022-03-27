export interface BrandGetAllDto {
  page: number;
  pageSize: number;
  site: string;
  order: string[];
  select?: string[];
}

export interface BrandCreateDto {
  name: string;
  country: string;
  continent: string;
  order: string[];
}

export interface BrandUpdateDto {
  _id: string;
  name: string;
  country: string;
  continent: string;
}
