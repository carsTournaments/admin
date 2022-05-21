import { CustomTableOptionsModel } from '@components/custom-table/model/custom-table.options-model';
import { CustomTitleWithButtonsViewModel } from '@components/custom-title-with-buttons/model/custom-title-with-buttons.view-model';
import { User } from '@models';
import { TournamentGetAllDto } from '@services/api/tournament/tournament.dto';

export class TournamentListViewModel {
    items: User[] = [];
    optionsTitle = new CustomTitleWithButtonsViewModel({
        title: 'Torneos',
        buttons: [{ name: 'Nuevo', link: '/tournaments/one' }],
    });
    optionsTable = new CustomTableOptionsModel({
        loading: false,
        items: [],
        type: 'tournament',
        showLoadMore: true,
        error: false,
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
