import { ChartOptionsModel } from 'src/app/components/chart-bar/chart.options-model';
import { CustomTitleWithButtonsViewModel } from 'src/app/components/custom-title-with-buttons/model/custom-title-with-buttons.view-model';
import { LogItem } from 'src/app/interfaces/logs-getAll.interface';
import { LoggerGetAllDto } from 'src/app/services/api/logger/dtos/logger-get-all.dto';

export class LogsViewModel {
    optionsTitle = new CustomTitleWithButtonsViewModel({
        title: 'Logs',
        buttons: [],
    });
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
    urls: LogItem[] = [];
}
