import { CustomTable2OptionsModel } from '@components/custom-table2/models/custom-table2.options-model';
import { GetAllDto } from '@core/dtos/generic.dto';
import { User } from '@models';

export class ReportListViewModel {
    items: User[] = [];
    title = 'Reportes';
    optionsTable = new CustomTable2OptionsModel({
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
