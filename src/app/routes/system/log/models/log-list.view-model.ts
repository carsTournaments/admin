import { CustomTableOptionsModel } from '@components/custom-table/models/custom-table.options-model';
import { LogGetAllDto } from '@services/api/log/dtos/log-get-all.dto';

export class LogListViewModel {
    title = 'Logs';
    tab = 0;
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
    totals: { name: string; value: number; color: string }[] = [];
    options = [
        {
            name: 'Eliminar todos los logs',
            value: 'deleteAll',
        },
    ];
}
