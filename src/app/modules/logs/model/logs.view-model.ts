import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { CustomTitleWithButtonsViewModel } from 'src/app/components/custom-title-with-buttons/model/custom-title-with-buttons.view-model';
import { LogItem } from 'src/app/interfaces/logs-getAll.interface';
import { LoggerGetAllDto } from 'src/app/services/logger/dtos/logger-get-all.dto';

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
  optionsMethods: { data: ChartData<'doughnut'>; type: ChartType } = {
    data: {
      labels: [],
      datasets: [{ data: [] }],
    },
    type: 'doughnut',
  };
  optionsRoles: { data: ChartData<'doughnut'>; type: ChartType } = {
    data: {
      labels: [],
      datasets: [{ data: [] }],
    },
    type: 'doughnut',
  };
  optionsDays: {
    data: ChartData<'bar'>;
    type: ChartType;
    options: ChartConfiguration['options'];
  } = {
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
  };
  urls: LogItem[] = [];
}
