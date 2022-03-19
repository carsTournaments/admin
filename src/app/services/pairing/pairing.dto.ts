import { PairingItemI } from 'src/app/models/pairing.model';

export interface PairingCreateAutomaticsPairingsDto {
  roundId: string;
}

export interface PairingUpdateDto {
  _id: string;
  round: string;
  pairings: PairingItemI[];
  winner: string;
}
