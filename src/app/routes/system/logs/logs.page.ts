import { Component, OnInit } from '@angular/core';
import { LoggerService } from '@services';
import { LogsViewModel } from './model/logs.view-model';

@Component({
    selector: 'page-logs',
    templateUrl: 'logs.page.html',
})
export class LogsPage implements OnInit {
    vm = new LogsViewModel();
    constructor(private loggerService: LoggerService) {}

    ngOnInit() {
        this.getLogs();
    }

    async getLogs() {
        this.initData();
        this.vm.loading = true;
        this.loggerService.getAll(this.vm.logsBody).subscribe({
            next: (data: any) => {
                this.vm.items = data;
                this.setItems();
                this.vm.loading = false;
            },
            error: (error: any) => {
                this.vm.loading = false;
                console.error(error);
            },
        });
    }

    setItems() {
        this.vm.items.methods.forEach((element: any) => {
            this.vm.optionsMethods.data.datasets[0].data.push(element.count);
            this.vm.optionsMethods.data.labels!.push(element.name);
        });
        this.vm.items.roles.forEach((element: any) => {
            this.vm.optionsRoles.data.datasets[0].data.push(element.count);
            this.vm.optionsRoles.data.labels!.push(element.name);
        });
        this.vm.items.days.forEach((element: any) => {
            this.vm.optionsDays.data.labels!.push(element.name);
            this.vm.optionsDays.data.datasets[0].data.push(element.count);
        });
        this.vm.optionsMethods.loading = false;
        this.vm.optionsRoles.loading = false;
        this.vm.optionsDays.loading = false;
        this.vm.urls = this.vm.items.urls;
    }

    onChangeMonth() {
        this.getLogs();
    }

    onChangeYear() {
        this.getLogs();
    }

    initData() {
        this.vm.optionsMethods.data.datasets[0].data = [];
        this.vm.optionsRoles.data.datasets[0].data = [];
        this.vm.optionsDays.data.datasets[0].data = [];
        this.vm.optionsMethods.data.labels = [];
        this.vm.optionsRoles.data.labels = [];
        this.vm.optionsDays.data.labels = [];
    }
}
