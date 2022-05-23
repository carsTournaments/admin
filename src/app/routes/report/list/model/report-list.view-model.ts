import { CustomTableOptionsModel } from '@components/custom-table/models/custom-table.options-model';
import { GetAllDto } from '@core/dtos/generic.dto';
import { User } from '@models';

export class ReportListViewModel {
    items: User[] = [];
    title = 'Reportes';
    optionsTable = new CustomTableOptionsModel({
        type: 'reports',
        items: [],
        loading: true,
        showLoadMore: true,
    });
    options = [
        {
            name: 'Eliminar todos los reportes',
            value: 'deleteAll',
        },
    ];
    ReportBody: GetAllDto = {
        page: 1,
        pageSize: 20,
        site: 'admin',
        order: ['created', 'desc'],
    };
}
