import { Tournament } from 'src/app/models/tournament.model';
import { InscriptionCreateDto } from 'src/app/services/inscription/inscription.dto';
export class AddInscriptionViewModel {
  tournamentName = '';
  disabledButton = true;
  results: Tournament[] = [];
  body: InscriptionCreateDto = {
    tournament: '',
    car: '',
  };
}
