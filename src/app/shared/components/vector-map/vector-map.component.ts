import { Component } from '@angular/core';
import { Options } from 'highcharts/highmaps';
import * as worldMap from './world.geo.json';
import * as Highcharts from 'highcharts/highmaps.js';
import { AnalyticsService, SnackBarService } from '@services';
import { AnalyticsGetVisitsDto } from '@services/api/analytics/analytics.dto';
import { flags } from 'assets/json/flags';

@Component({
    selector: 'vector-map',
    templateUrl: 'vector-map.component.html',
    styleUrls: ['./vector-map.component.scss'],
})
export class VectorMapComponent {
    Highcharts: typeof Highcharts = Highcharts;
    dateSelected = '7daysAgo';
    chartConstructor = 'mapChart';
    chartCallback;
    chart: any;
    updateFlag = false;
    data: any[] = [];
    values: any[] = [];
    dataDate!: any[];
    loading = true;
    series: any[] = [];
    defaultSerie: any;
    flags = flags;
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

    constructor(
        private analyticsService: AnalyticsService,
        private snackBarService: SnackBarService
    ) {
        this.getVisits();
        this.setDates();
        this.chartCallback = (chart: any) => {
            // saving chart reference
            this.chart = chart;
        };
    }

    setDefaultSerie() {
        this.defaultSerie = {
            color: '#CC0000',
            name: 'Visitantes',
            states: {
                hover: {
                    color: 'red',
                },
            },
            showInLegend: false,
            marker: {
                lineWidth: 1,
                lineColor: '#000',
            },

            accessibility: {
                point: {
                    valueDescriptionFormat: '{xDescription}, {point.temp}°C.',
                },
            },
            allAreas: true,
            data: this.data,
        };
    }

    setDates() {
        this.dataDate = this.analyticsService.dates;
    }

    getVisits() {
        const body: AnalyticsGetVisitsDto = {
            startDate: this.dateSelected,
            endDate: 'today',
            order: 'date',
        };
        this.analyticsService.getDataForVMap(body).subscribe({
            next: (response) => {
                this.values = [];
                response.forEach((item) => {
                    this.values.push({ name: item[0], value: item[1] });
                });

                const values = response;
                this.data = values;
                console.log(this.values);
                this.setData();
            },
            error: (error) => this.snackBarService.open(error),
        });
    }

    setData() {
        this.chartOptions.series = [];
        this.setDefaultSerie();
        this.chartOptions.series.push(this.defaultSerie);
        this.loading = false;
    }

    async onChangeSelect() {
        this.getVisits();
        this.updateChart();
    }

    updateChart() {
        this.chart = this.chart;

        this.chart.showLoading();
        setTimeout(() => {
            this.chart.hideLoading();
            this.setDefaultSerie();
            this.chartOptions.series!.push(this.defaultSerie);

            this.updateFlag = true;
        }, 2000);
    }
}
