import { CustomTableOptionsModel } from '@components/custom-table/models/custom-table.options-model';
import { GetAllDto } from '@core/dtos/generic.dto';
import { User } from '@models';

export class PairingListViewModel {
    items: User[] = [];
    title = 'Emparejamientos';
    optionsTable = new CustomTableOptionsModel({
        type: 'pairings',
        items: [],
        loading: true,
        showLoadMore: true,
    });
    options = [
        {
            name: 'Eliminar todos los emparejamientos',
            value: 'deleteAll',
        },
    ];
    pairingBody: GetAllDto = {
        page: 1,
        pageSize: 20,
        site: 'admin',
        order: ['created', 'desc'],
    };
}
