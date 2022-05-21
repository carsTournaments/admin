import { CustomTableOptionsModel } from '@components/custom-table/model/custom-table.options-model';
import { CustomTitleWithButtonsViewModel } from '@components/custom-title-with-buttons/model/custom-title-with-buttons.view-model';
import { User } from '@models';
import { WinnerGetAllDto } from '@services/api/winner/winner.dto';

export class WinnerListViewModel {
    items: User[] = [];
    optionsTitle = new CustomTitleWithButtonsViewModel({
        title: 'Ganadores',
        buttons: [],
    });
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
