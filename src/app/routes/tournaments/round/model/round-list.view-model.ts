import { CustomTable2OptionsModel } from '@components/custom-table2/models/custom-table2.options-model';
import { User } from '@models';
import { RoundGetAllDto } from '@services/api/round/round.dto';

export class RoundListViewModel {
    items: User[] = [];
    title = 'Rondas';
    optionsTable = new CustomTable2OptionsModel({
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
