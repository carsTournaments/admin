import { User } from '@models';
import { RoundGetAllDto } from '@services/api/round/round.dto';
import { CustomTableOptionsModel } from '@shared/components/custom-table/model/custom-table.options-model';
import { CustomTitleWithButtonsViewModel } from '@shared/components/custom-title-with-buttons/model/custom-title-with-buttons.view-model';

export class RoundListViewModel {
    items: User[] = [];
    optionsTitle = new CustomTitleWithButtonsViewModel({
        title: 'Rondas',
        buttons: [],
    });
    optionsTable = new CustomTableOptionsModel({
        loading: false,
        items: [],
        type: 'round',
        showLoadMore: true,
        error: false,
    });
    options = [
        {
            name: 'Prueba',
            value: '',
        },
    ];
    roundBody: RoundGetAllDto = {
        page: 1,
        pageSize: 20,
        site: 'admin',
        order: ['created', 'desc'],
    };
}
