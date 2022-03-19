import { Pairing } from './pairing.model';

export class Round {
  _id?: string;
  name: string;
  participants: number;
  tournament: any; // TournamentI
  startDate: string;
  endDate: string;
  finished: boolean;
  pairings?: Pairing[]; // Virtual
  created?: string;
  updated?: string;
  constructor(data?: Round) {
    this._id = data?._id;
    this.name = data?.name || '';
    this.participants = data?.participants || 0;
    this.tournament = data?.tournament || null;
    this.startDate = data?.startDate || '';
    this.endDate = data?.endDate || '';
    this.finished = data?.finished || false;
    this.pairings = data?.pairings || [];
    this.created = data?.created;
    this.updated = data?.updated;
  }
}
