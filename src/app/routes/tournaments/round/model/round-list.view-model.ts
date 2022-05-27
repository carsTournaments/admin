import { CustomTableOptionsModel } from '@components/custom-table/models/custom-table.options-model';
import { User } from '@models';
import { RoundGetAllDto } from '@services/api/round/round.dto';

export class RoundListViewModel {
    items: User[] = [];
    title = 'Rondas';
    optionsTable = new CustomTableOptionsModel({
        type: 'rounds',
        items: [],
        loading: true,
        showLoadMore: true,
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
