import { Tournament } from 'src/app/models/tournament.model';
export class AddInscriptionViewModel {
  tournamentName = '';
  disabledButton = true;
  results: Tournament[] = [];
}
