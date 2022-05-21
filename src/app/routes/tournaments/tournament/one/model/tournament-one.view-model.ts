import { CustomTableOptionsModel } from '@components/custom-table/model/custom-table.options-model';
import { CustomTable2OptionsModel } from '@components/custom-table2/models/custom-table2.options-model';
import { OptionItemI } from '@interfaces/option-item.interface';
import { Tournament, TournamentRequisiteI } from '@models/tournament.model';
import { TournamentForceNextRoundDto } from '@services/api/tournament/tournament.dto';

export class TournamentOnePageViewModel {
    id!: string;
    item: Tournament = new Tournament();
    title = '';
    inscriptionsOptionsTable = new CustomTable2OptionsModel({
        type: 'inscriptions',
        items: [],
        loading: true,
    });
    roundsOptionsTable = new CustomTable2OptionsModel({
        type: 'rounds',
        items: [],
        loading: true,
    });
    pairingsOptionsTable = new CustomTable2OptionsModel({
        type: 'pairings',
        items: [],
        loading: true,
    });
    votesOptionsTable = new CustomTable2OptionsModel({
        type: 'votes',
        items: [],
        loading: true,
    });
    winnersOptionsTable = new CustomTable2OptionsModel({
        type: 'winners',
        items: [],
        loading: true,
    });
    edit = false;
    options: OptionItemI[] = [
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
}
