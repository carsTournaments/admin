import { Component, OnInit } from '@angular/core';
import { StatsViewModel } from './model/stats.view-model';

@Component({
    selector: 'page-stats',
    templateUrl: 'stats.component.html',
})
export class StatsPage implements OnInit {
    vm = new StatsViewModel();
    constructor() {}

    ngOnInit() {}
}
