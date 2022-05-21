import { CustomTableOptionsModel } from '@components/custom-table/model/custom-table.options-model';
import { User } from '@models';
import { WinnerGetAllDto } from '@services/api/winner/winner.dto';

export class WinnerListViewModel {
    items: User[] = [];
    title = 'Ganadores';
    optionsTable = new CustomTableOptionsModel({
        loading: false,
        items: [],
        type: 'winner',
        showLoadMore: true,
        error: false,
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
