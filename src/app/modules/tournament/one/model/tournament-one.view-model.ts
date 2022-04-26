import { CustomTableOptionsModel } from 'src/app/components/custom-table/model/custom-table.options-model';
import { CustomTitleWithButtonsViewModel } from 'src/app/components/custom-title-with-buttons/model/custom-title-with-buttons.view-model';
import { SegmentsViewModel } from 'src/app/components/segments/model/segments.view-model';
import { OptionItemI } from 'src/app/interfaces/option-item.interface';
import {
    Tournament,
    TournamentRequisiteI,
} from 'src/app/models/tournament.model';
import { RoundForceNextRoundDto } from 'src/app/services/round/round.dto';

export class TournamentOnePageViewModel {
    id!: string;
    item: Tournament = new Tournament();
    optionsTitle = new CustomTitleWithButtonsViewModel({
        title: '',
        buttons: [],
    });
    optionsSegments = new SegmentsViewModel({
        segments: [
            'Info',
            'Opciones',
            'Imagen',
            'Inscripciones',
            'Rondas',
            'Emparejamientos',
            'Votos',
        ],
        currentSegment: 0,
    });
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
    edit = false;
    options: OptionItemI[] = [
        {
            name: 'Avanzar ronda',
            value: 'nextRound',
        },
        {
            name: 'Forzar inscripciones',
            value: 'forceInscriptions',
        },
        {
            name: 'Forzar inicio de torneo',
            value: 'startTournament',
        },
        {
            name: 'Resetear torneo',
            value: 'resetTournament',
        },
        {
            name: 'Eliminar inscripciones',
            value: 'deleteInscriptions',
        },
        {
            name: 'Eliminar rondas',
            value: 'deleteRounds',
        },
        {
            name: 'Eliminar torneo',
            value: 'delete',
        },
    ];
    requisitesDefault: TournamentRequisiteI[] = [];
    requisiteSelected!: string;
    forceNextRoundBody: RoundForceNextRoundDto = {
        tournamentId: '',
    };
    startDate = '';
    startTime = '';
    endDate = '';
    endTime = '';
}
