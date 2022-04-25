import { CustomTableOptionsModel } from 'src/app/components/custom-table/model/custom-table.options-model';
import { CustomTitleWithButtonsViewModel } from 'src/app/components/custom-title-with-buttons/model/custom-title-with-buttons.view-model';
import { SegmentsViewModel } from 'src/app/components/segments/model/segments.view-model';
import { User } from 'src/app/models/user.model';
import { PairingGetAllDto } from 'src/app/services/pairing/pairing.dto';

export class LikeListViewModel {
    items: User[] = [];
    optionsTitle = new CustomTitleWithButtonsViewModel({
        title: 'Likes',
        buttons: [{ name: 'Nuevo', link: '/likes/one', separated: false }],
    });
    optionsTable = new CustomTableOptionsModel({
        loading: false,
        items: [],
        type: 'pairing',
        showLoadMore: true,
        error: false,
    });
    optionsSegments = new SegmentsViewModel({
        segments: ['Listado', 'Opciones'],
        currentSegment: 0,
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
