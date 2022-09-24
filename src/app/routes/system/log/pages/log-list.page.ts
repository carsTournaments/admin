import { Component, OnInit } from '@angular/core';
import { LogService, SnackBarService } from '@services';
import { LogI } from '@services/api/log/log.interface';
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
            next: (response) => this.onGetAllSuccess(response),
            error: (error) => {
                this.vm.optionsTable.loading = false;
                this.snackBarService.open(error);
            },
        });
    }

    onGetAllSuccess(response: LogI[]) {
        this.vm.optionsTable.items = response;
        this.setTotals();
        this.vm.optionsTable.loading = false;
    }

    setTotals() {
        const items = this.vm.optionsTable.items;
        for (const item of items) {
            for (const total of this.vm.totals) {
                if (item.level === total.name) {
                    total.value += 1;
                }
            }
        }
    }
}
