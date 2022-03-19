export class Pairing {
  _id?: string;
  round: string; //RoundI;
  pairings: PairingItemI[];
  winner: string;
  created?: string;
  updated?: string;
  constructor(data?: Pairing) {
    this._id = data?._id;
    this.round = data?.round || '';
    this.pairings = data?.pairings || [];
    this.winner = data?.winner || '';
    this.created = data?.created || '';
    this.updated = data?.updated || '';
  }
}

export interface PairingItemI {
  car1: { votes: number; car: any };
  car2: { votes: number; car: any };
}
