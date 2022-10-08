import { Options } from 'highcharts';
import { flags } from 'assets/json/flags';
import * as worldMap from './world.geo.json';
import { AnalyticsGetVisitsDto } from '@services/api/analytics/analytics.dto';

export class WorldMapViewModel {
    body: AnalyticsGetVisitsDto = {
        startDate: '',
        endDate: 'today',
        order: 'date',
    };
    chart: any;
    chartConstructor = 'mapChart';
    dateSelected = '7daysAgo';
    updateFlag = false;
    data: any[] = [];
    values: any[] = [];
    dataDate!: any[];
    loading = true;
    defaultSerie: any;
    flags = flags;
    series: any[] = [];
    chartOptions: Options = {
        chart: {
            map: worldMap,
        },
        title: {
            text: '',
        },
        subtitle: {
            text: '',
        },
        mapNavigation: {
            enabled: true,
            buttonOptions: {
                alignTo: 'spacingBox',
            },
        },
        legend: {
            enabled: false,
        },
        series: this.series,
    };
}
