import { Tournament } from '@models';
import { InscriptionCreateDto } from '@services/api/inscription/inscription.dto';
import { TournamentGetAllDto } from '@services/api/tournament/tournament.dto';

export class AddInscriptionViewModel {
    tournamentIdSelected = '';
    tournaments: Tournament[] = [];
    bodyInscription: InscriptionCreateDto = {
        tournament: '',
        car: '',
        driver: '',
    };
    bodyTournament: TournamentGetAllDto = {
        page: 1,
        pageSize: 10,
        site: 'admin',
        order: ['name', 'asc'],
    };
}
