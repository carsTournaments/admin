import { CustomTableOptionsModel } from '@components/custom-table/models/custom-table.options-model';
import { Tournament, User } from '@models';
import { TournamentGetAllDto } from '@services/api/tournament/tournament.dto';

export class TournamentListViewModel {
    items: User[] = [];
    title = 'Torneos';
    optionsTable = new CustomTableOptionsModel({
        type: 'tournaments',
        items: [],
        loading: true,
        showLoadMore: true,
    });
    tournamentBody: TournamentGetAllDto = {
        page: 1,
        pageSize: 20,
        order: ['created', 'desc'],
        site: 'admin',
    };
    options = [
        {
            name: 'Prueba',
            value: '',
        },
    ];
    item = new Tournament();
    startDate = '';
    startTime = '';
    endDate = '';
    endTime = '';
}
