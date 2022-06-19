import { CustomTableOptionsModel } from '@components/custom-table/models/custom-table.options-model';
import { GetAllDto } from '@core/dtos/generic.dto';

export class LiteralListViewModel {
    title = 'Literales';
    optionsTable = new CustomTableOptionsModel({
        type: 'literals',
        items: [],
        loading: true,
        showLoadMore: true,
    });
    body: GetAllDto = {
        page: 1,
        pageSize: 20,
        site: 'admin',
        order: ['created', 'desc'],
    };
    options = [
        {
            name: 'Eliminar todos los toggles',
            value: 'deleteAll',
        },
    ];
    segmentSelected = 0;
}
