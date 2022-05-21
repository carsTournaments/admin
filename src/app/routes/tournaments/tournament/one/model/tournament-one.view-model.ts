import { CustomTableOptionsModel } from '@components/custom-table/model/custom-table.options-model';
import { OptionItemI } from '@interfaces/option-item.interface';
import { Tournament, TournamentRequisiteI } from '@models/tournament.model';
import { TournamentForceNextRoundDto } from '@services/api/tournament/tournament.dto';

export class TournamentOnePageViewModel {
    id!: string;
    item: Tournament = new Tournament();
    title = '';
    inscriptionsOptionsTable = new CustomTableOptionsModel({
        loading: false,
        items: [],
        type: 'inscription',
        showLoadMore: true,
        error: false,
    });
    roundsOptionsTable = new CustomTableOptionsModel({
        loading: false,
        items: [],
        type: 'round',
        showLoadMore: true,
        error: false,
    });
    pairingsOptionsTable = new CustomTableOptionsModel({
        loading: false,
        items: [],
        type: 'pairing',
        showLoadMore: true,
        error: false,
    });
    votesOptionsTable = new CustomTableOptionsModel({
        loading: false,
        items: [],
        type: 'vote',
        showLoadMore: true,
        error: false,
    });
    winnersOptionsTable = new CustomTableOptionsModel({
        loading: false,
        items: [],
        type: 'winner',
        showLoadMore: true,
        error: false,
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
