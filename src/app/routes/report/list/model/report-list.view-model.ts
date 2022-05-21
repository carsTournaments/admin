import { CustomTableOptionsModel } from '@components/custom-table/model/custom-table.options-model';
import { GetAllDto } from '@core/dtos/generic.dto';
import { User } from '@models';

export class ReportListViewModel {
    items: User[] = [];
    title = 'Reportes';
    optionsTable = new CustomTableOptionsModel({
        loading: false,
        items: [],
        type: 'report',
        showLoadMore: true,
        error: false,
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
