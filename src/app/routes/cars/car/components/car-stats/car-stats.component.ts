import { Component, Input, OnInit } from '@angular/core';
import { CustomTableOptionsModel } from '@components/custom-table/models/custom-table.options-model';
import { CarStatsI } from '@services/api/car/car.interface';

@Component({
    selector: 'car-stats',
    templateUrl: 'car-stats.component.html',
})
export class CarStatsComponent implements OnInit {
    @Input() stats!: CarStatsI[];
    optionsTables: CustomTableOptionsModel[] = [];

    ngOnInit() {
        this.setOptionsTables();
    }

    setOptionsTables() {
        for (const stat of this.stats) {
            const item = new CustomTableOptionsModel({
                type: 'carStats',
                items: stat.items,
                showLoadMore: false,
                loading: false,
            });
            this.optionsTables.push(item);
        }
    }
}
