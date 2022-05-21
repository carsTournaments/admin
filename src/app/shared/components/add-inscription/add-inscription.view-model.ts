import { Tournament } from '@models';
import { InscriptionCreateDto } from '@services/api/inscription/inscription.dto';
export class AddInscriptionViewModel {
    tournamentName = '';
    disabledButton = true;
    results: Tournament[] = [];
    body: InscriptionCreateDto = {
        tournament: '',
        car: '',
    };
}
