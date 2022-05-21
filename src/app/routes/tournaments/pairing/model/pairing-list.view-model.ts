import { CustomTableOptionsModel } from '@components/custom-table/model/custom-table.options-model';
import { User } from '@models';
import { PairingGetAllDto } from '@services/api/pairing/pairing.dto';

export class PairingListViewModel {
    items: User[] = [];
    title = 'Emparejamientos';
    optionsTable = new CustomTableOptionsModel({
        loading: false,
        items: [],
        type: 'pairing',
        showLoadMore: true,
        error: false,
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
