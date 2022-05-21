import { CustomTable2OptionsModel } from '@components/custom-table2/models/custom-table2.options-model';
import { User } from '@models';
import { TournamentGetAllDto } from '@services/api/tournament/tournament.dto';

export class TournamentListViewModel {
    items: User[] = [];
    title = 'Torneos';
    optionsTable = new CustomTable2OptionsModel({
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
}
