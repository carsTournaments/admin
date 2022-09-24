import { Component, OnInit } from '@angular/core';
import { LogService, SnackBarService } from '@services';
import { LogListViewModel } from '../models/log-list.view-model';

@Component({
    selector: 'log-list',
    templateUrl: 'log-list.page.html',
})
export class LogListPage implements OnInit {
    vm = new LogListViewModel();
    constructor(
        private logService: LogService,
        private snackBarService: SnackBarService
    ) {}

    ngOnInit() {
        this.getAll();
    }

    async getAll() {
        this.vm.optionsTable.loading = true;
        this.logService.getAll(this.vm.logsParams).subscribe({
            next: (response) => {
                this.vm.optionsTable.items = response;
                this.vm.optionsTable.loading = false;
            },
            error: (error) => {
                this.vm.optionsTable.loading = false;
                this.snackBarService.open(error);
            },
        });
    }
}
