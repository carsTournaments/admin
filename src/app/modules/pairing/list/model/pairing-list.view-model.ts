import { CustomTableOptionsModel } from 'src/app/components/custom-table/model/custom-table.options-model';
import { CustomTitleWithButtonsViewModel } from 'src/app/components/custom-title-with-buttons/model/custom-title-with-buttons.view-model';
import { User } from 'src/app/models/user.model';
import { PairingGetAllDto } from 'src/app/services/api/pairing/pairing.dto';

export class PairingListViewModel {
    items: User[] = [];
    optionsTitle = new CustomTitleWithButtonsViewModel({
        title: 'Emparejamientos',
        buttons: [],
    });
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
