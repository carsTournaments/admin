export interface RoundCreateAutomaticsRoundsDto {
  tournamentId: string;
}

export interface RoundUpdateDto {
  _id: string;
  name: string;
  participants: number;
  tournament: any; // TournamentI
  startDate: string;
  endDate: string;
  finished: string;
}
