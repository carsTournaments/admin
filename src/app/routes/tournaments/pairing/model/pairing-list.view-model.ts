import { CustomTableOptionsModel } from '@components/custom-table/models/custom-table.options-model';
import { User } from '@models';
import { PairingGetAllDto } from '@services/api/pairing/pairing.dto';

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
    pairingBody: PairingGetAllDto = {
        page: 1,
        pageSize: 20,
        site: 'admin',
        order: ['created', 'desc'],
    };
}
