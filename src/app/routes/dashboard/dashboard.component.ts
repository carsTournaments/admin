import { Component } from '@angular/core';
import { DashboardViewModel } from './model/dashboard.view-model';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'dashboard.component.html',
})
export class DashboardComponent {
    vm = new DashboardViewModel();
}
