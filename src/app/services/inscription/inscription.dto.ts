export interface InscriptionGetAllDto {
  page: number;
  pageSize: number;
  site: string;
}

export interface InscriptionCreateDto {
  car: string;
  tournament: string;
}
