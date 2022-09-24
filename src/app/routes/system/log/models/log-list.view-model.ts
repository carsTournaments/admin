import { CustomTableOptionsModel } from '@components/custom-table/models/custom-table.options-model';
import { LogGetAllDto } from '@services/api/log/dtos/log-get-all.dto';

export class LogListViewModel {
    title = 'Logs';
    optionsTable = new CustomTableOptionsModel({
        type: 'logs',
        items: [],
        loading: true,
        showLoadMore: true,
    });

    logsParams: LogGetAllDto = {
        type: 'all',
        order: 'date:asc',
    };
}
