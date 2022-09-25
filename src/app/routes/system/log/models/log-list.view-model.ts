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
    totals = [
        { name: 'info', value: 0, color: '#2096f3' },
        { name: 'http', value: 0, color: '#4caf4f' },
        { name: 'warn', value: 0, color: '#ff9800' },
        { name: 'error', value: 0, color: '#f44336' },
    ];
}
