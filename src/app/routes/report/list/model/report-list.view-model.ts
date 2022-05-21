import { CustomTableOptionsModel } from '@components/custom-table/model/custom-table.options-model';
import { CustomTitleWithButtonsViewModel } from '@components/custom-title-with-buttons/model/custom-title-with-buttons.view-model';
import { GetAllDto } from '@core/dtos/generic.dto';
import { User } from '@models';

export class ReportListViewModel {
    items: User[] = [];
    optionsTitle = new CustomTitleWithButtonsViewModel({
        title: 'Reportes',
        buttons: [],
    });
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
