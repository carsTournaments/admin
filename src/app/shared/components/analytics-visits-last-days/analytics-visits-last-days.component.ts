import { Component, OnInit } from '@angular/core';
import { AnalyticsService, SnackBarService } from '@services';
import { AnalyticsGetVisitsDto } from '@services/api/analytics/analytics.dto';
import { AnalyticsGetVisitsResponse } from '@services/api/analytics/analytics.response';
import { ChartOptionsModel } from '../chart-bar/chart-bar.options-model';

@Component({
    selector: 'analytics-visits-last-days',
    templateUrl: 'analytics-visits-last-days.component.html',
    styleUrls: ['./analytics-visits-last-days.component.scss'],
})
export class AnalyticsVisitsLastDaysComponent implements OnInit {
    data!: AnalyticsGetVisitsResponse[];
    optionsChart!: any;
    dateSelected = '7daysAgo';
    dataDate!: any[];
    constructor(
        private analyticsService: AnalyticsService,
        private snackBarService: SnackBarService
    ) {}

    ngOnInit() {
        this.setDates();
        setTimeout(() => {
            this.getVisits();
        }, 2000);
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
        this.analyticsService.getVisits(body).subscribe({
            next: (response) => {
                this.data = response;
                this.createOptionsChart();
                this.createDatasets();
                this.setData();
            },
            error: (error) => this.snackBarService.open(error),
        });
    }

    private createOptionsChart() {
        this.optionsChart = new ChartOptionsModel({
            data: {
                labels: [],
                datasets: [],
            },
            type: 'line',
            options: {
                scales: {
                    x: { grid: { display: false } },
                    y: {
                        display: true,
                        ticks: { display: true },
                        grid: { display: false },
                    },
                },
                // scales: { x: { display: false }, y: { display: false } },
                elements: { line: { tension: 0.5 } },
                responsive: true,
                maintainAspectRatio: false,
                // plugins: { legend: { display: false } },
            },
            loading: true,
        });
    }

    private createDatasets() {
        this.data[0].items.forEach((element) => {
            this.optionsChart.data.datasets.push({
                data: [],
                fill: true,
                label: element.name,
                // borderColor: '#000',
                // pointBorderColor: '#000',
                // pointBackgroundColor: '#000',
                // pointBorderWidth: 4,
            });
        });
    }

    setData() {
        this.data.forEach((element) => {
            element.items.forEach((subi, i) => {
                this.optionsChart.data.datasets[i].data.push(subi.value);
            });
            this.optionsChart.data.labels.push(element.date);
        });
        this.optionsChart.loading = false;
    }

    onChangeSelect() {
        this.getVisits();
    }
}
