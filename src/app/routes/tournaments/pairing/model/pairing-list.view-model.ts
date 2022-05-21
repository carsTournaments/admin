import { CustomTable2OptionsModel } from '@components/custom-table2/models/custom-table2.options-model';
import { User } from '@models';
import { PairingGetAllDto } from '@services/api/pairing/pairing.dto';

export class PairingListViewModel {
    items: User[] = [];
    title = 'Emparejamientos';
    optionsTable = new CustomTable2OptionsModel({
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
