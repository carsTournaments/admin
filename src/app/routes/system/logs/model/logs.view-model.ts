import { ChartOptionsModel } from '@components/chart-bar/chart-bar.options-model';
import { CustomTableOptionsModel } from '@components/custom-table/models/custom-table.options-model';
import { LoggerGetAllDto } from '@services/api/logger/dtos/logger-get-all.dto';

export class LogsViewModel {
    title = 'Logs';
    loading = true;
    items: any = [];
    logsBody: LoggerGetAllDto = {
        month: ('0' + (new Date().getMonth() + 1)).slice(-2).toString(),
        year: new Date().getFullYear().toString(),
    };
    optionsMethods = new ChartOptionsModel({
        data: {
            labels: [],
            datasets: [{ data: [] }],
        },
        type: 'doughnut',
        options: {},
        loading: true,
    });
    optionsRoles = new ChartOptionsModel({
        data: {
            labels: [],
            datasets: [{ data: [] }],
        },
        type: 'doughnut',
        options: {},
        loading: true,
    });
    optionsDays = new ChartOptionsModel({
        data: {
            labels: [],
            datasets: [{ data: [] }],
        },
        type: 'bar',
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false,
                },
            },
        },
        loading: true,
    });
    urlsOptionsTable = new CustomTableOptionsModel({
        type: 'logs',
        items: [],
        loading: true,
        showPaginator: true,
        pageSize: 10,
    });
}
