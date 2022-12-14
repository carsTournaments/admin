import { CustomTableOptionsModel } from '@components/custom-table/models/custom-table.options-model';
import { OptionItemI } from '@interfaces/option-item.interface';
import { Tournament } from '@models';
import { TournamentForceNextRoundDto } from '@services/api/tournament/tournament.dto';
import { TournamentRequisiteI } from '@services/api/tournament/tournament.interface';

export class TournamentOnePageViewModel {
    id!: string;
    item: Tournament = new Tournament();
    title = '';
    inscriptionsOptionsTable = new CustomTableOptionsModel({
        type: 'inscriptionsTournament',
        items: [],
        loading: true,
    });
    roundsOptionsTable = new CustomTableOptionsModel({
        type: 'rounds',
        items: [],
        loading: true,
    });
    pairingsOptionsTable = new CustomTableOptionsModel({
        type: 'pairingsTournament',
        items: [],
        loading: true,
    });
    votesOptionsTable = new CustomTableOptionsModel({
        type: 'votesTournament',
        items: [],
        loading: true,
    });
    winnersOptionsTable = new CustomTableOptionsModel({
        type: 'winners',
        items: [],
        loading: true,
    });
    edit = false;
    options: OptionItemI[] = [
        {
            name: 'Crear votos anonimos',
            value: 'createFakeVotes',
            disabled: false,
        },
        {
            name: 'Avanzar ronda',
            value: 'nextRound',
            disabled: false,
        },
        {
            name: 'Forzar inscripciones',
            value: 'forceInscriptions',
            disabled: false,
        },
        {
            name: 'Forzar inicio de torneo',
            value: 'startTournament',
            disabled: false,
        },
        {
            name: 'Resetear torneo',
            value: 'resetTournament',
            disabled: false,
        },
        {
            name: 'Cancelar torneo',
            value: 'cancelTournament',
            disabled: false,
        },
        {
            name: 'Eliminar torneo',
            value: 'delete',
            disabled: false,
        },
    ];
    requisitesDefault: TournamentRequisiteI[] = [];
    requisiteSelected!: string;
    forceNextRoundBody: TournamentForceNextRoundDto = {
        tournamentId: '',
    };
    startDate = '';
    startTime = '';
    endDate = '';
    endTime = '';
    disabledItems = false;
    inscriptionsPercentage?: number;
}
