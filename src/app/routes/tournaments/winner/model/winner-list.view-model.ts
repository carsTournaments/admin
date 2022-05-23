import { CustomTableOptionsModel } from '@components/custom-table/models/custom-table.options-model';
import { User } from '@models';
import { WinnerGetAllDto } from '@services/api/winner/winner.dto';

export class WinnerListViewModel {
    items: User[] = [];
    title = 'Ganadores';
    optionsTable = new CustomTableOptionsModel({
        type: 'winners',
        items: [],
        loading: true,
        showLoadMore: true,
    });
    options = [
        {
            name: 'Eliminar todos los ganadores',
            value: 'deleteAll',
        },
    ];
    winnerBody: WinnerGetAllDto = {
        page: 1,
        pageSize: 20,
        site: 'admin',
        order: ['created', 'desc'],
    };
}
