import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highmaps.js';
import { AnalyticsService, SnackBarService } from '@services';
import { WorldMapViewModel } from './world-map.view-model';

@Component({
    selector: 'world-map',
    templateUrl: 'world-map.component.html',
    styleUrls: ['./world-map.component.scss'],
})
export class WorldMapComponent implements OnInit {
    vm = new WorldMapViewModel();
    Highcharts: typeof Highcharts = Highcharts;
    chartCallback: any;
    constructor(
        private analyticsService: AnalyticsService,
        private snackBarService: SnackBarService
    ) {}

    ngOnInit() {
        this.getVisits();
        this.setDates();
        this.chartCallback = (chart: any) => {
            this.vm.chart = chart;
        };
    }

    private setDefaultSerie() {
        this.vm.defaultSerie = {
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
            data: this.vm.data,
        };
    }

    private setDates() {
        this.vm.dataDate = this.analyticsService.dates;
    }

    private getVisits() {
        this.vm.body.startDate = this.vm.dateSelected;
        this.analyticsService.getDataForVMap(this.vm.body).subscribe({
            next: (response) => {
                this.vm.values = [];
                response.forEach((item) => {
                    this.vm.values.push({ name: item[0], value: item[1] });
                });

                const values = response;
                this.vm.data = values;
                console.log(this.vm.values);
                this.setData();
            },
            error: (error) => this.snackBarService.open(error),
        });
    }

    private setData() {
        this.vm.chartOptions.series = [];
        this.setDefaultSerie();
        this.vm.chartOptions.series.push(this.vm.defaultSerie);
        this.vm.loading = false;
    }

    async onChangeSelect() {
        this.getVisits();
        this.updateChart();
    }

    updateChart() {
        this.vm.chart.showLoading();
        setTimeout(() => {
            this.vm.chart.hideLoading();
            this.setDefaultSerie();
            this.vm.chartOptions.series!.push(this.vm.defaultSerie);
            this.vm.updateFlag = true;
        }, 2000);
    }
}
