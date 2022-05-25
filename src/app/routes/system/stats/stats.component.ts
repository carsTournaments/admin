import { CustomTableOptionsModel } from '@components/custom-table/models/custom-table.options-model';
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '@services';
import { StatsViewModel } from './model/stats.view-model';

@Component({
    selector: 'page-stats',
    templateUrl: 'stats.component.html',
})
export class StatsPage implements OnInit {
    vm = new StatsViewModel();

    constructor(private analyticsService: AnalyticsService) {}

    ngOnInit(): void {
        this.getEventsWithCategories();
        this.setDates();
    }

    setDates() {
        this.vm.dates = this.analyticsService.dates;
    }

    getEventsWithCategories() {
        this.analyticsService
            .getEventsWithCategories(this.vm.bodyEventsWithCategoryes)
            .subscribe((res) => {
                this.vm.eventsWithCategories = res;
                this.generateOptionsTables();
            });
    }

    generateOptionsTables() {
        this.vm.optionsTables = [];
        this.vm.eventsWithCategories.forEach((item) => {
            console.log(item.items.length, item.name);
            this.vm.optionsTables.push(
                new CustomTableOptionsModel({
                    type: 'statsEvents',
                    items: item.items,
                    loading: false,
                })
            );
        });
    }
}
