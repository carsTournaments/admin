export interface PairingGetAllDto {
  page: number;
  pageSize: number;
  site: string;
  order: string[];
}

export interface PairingCreateAutomaticsPairingsDto {
  roundId: string;
}

export interface PairingUpdateDto {
  _id: string;
  round: string; //RoundI;
  winner: string;
  votes1: number;
  car1: any;
  votes2: number;
  car2: any;
}
