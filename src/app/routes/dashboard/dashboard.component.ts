import { Component, OnInit } from '@angular/core';
import { TournamentService, CarService } from '@services';
import { DashboardViewModel } from './model/dashboard.view-model';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'dashboard.component.html',
})
export class DashboardComponent implements OnInit {
    vm = new DashboardViewModel();
    constructor() {}

    ngOnInit() {
        // this.getStats();
    }
}
