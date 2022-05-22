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
    optionsChart = new ChartOptionsModel({
        data: {
            labels: [],
            datasets: [
                {
                    data: [],
                    fill: {
                        target: 'origin',
                        above: 'rgba(0, 0, 0, .5)',
                    },
                    label: 'Visitas',
                    borderColor: '#000',
                    pointBorderColor: '#CC0000',
                    pointBackgroundColor: '#CC0000',
                    pointBorderWidth: 4,
                },
            ],
        },
        type: 'line',
        options: {
            scales: {
                x: { grid: { display: false } },
                y: {
                    display: false,
                    ticks: { display: false },
                    grid: { display: false },
                },
            },
            // scales: { x: { display: false }, y: { display: false } },
            elements: { line: { tension: 0.5 } },
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
        },
        loading: true,
    });
    constructor(
        private analyticsService: AnalyticsService,
        private snackBarService: SnackBarService
    ) {}

    ngOnInit() {
        this.getVisits();
    }

    getVisits() {
        const body: AnalyticsGetVisitsDto = {
            startDate: '30daysAgo',
            endDate: 'today',
            order: 'date',
        };
        this.analyticsService.getVisits(body).subscribe({
            next: (response) => {
                this.data = response;
                this.setData();
            },
            error: (error) => this.snackBarService.open(error),
        });
    }

    setData() {
        this.data.forEach((element: any) => {
            this.optionsChart.data.datasets[0].data.push(element.value);
            this.optionsChart.data.labels!.push(element.date);
        });
        this.optionsChart.loading = false;
    }
}
