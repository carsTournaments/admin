import { Component, OnInit } from '@angular/core';
import { ActionForOptionI } from '@interfaces';
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
    setDefaultTotals() {
        this.vm.totals = [
            { name: 'info', value: 0, color: '#2096f3' },
            { name: 'http', value: 0, color: '#4caf4f' },
            { name: 'warn', value: 0, color: '#ff9800' },
            { name: 'error', value: 0, color: '#f44336' },
        ];
    }

    setTotals() {
        this.setDefaultTotals();
        const items = this.vm.optionsTable.items;
        for (const item of items) {
            for (const total of this.vm.totals) {
                if (item.level === total.name) {
                    total.value += 1;
                }
            }
        }
    }

    actionForOption(option: ActionForOptionI) {
        if (option.value === 'deleteAll') {
            this.deleteAll();
        }
    }

    deleteAll() {
        this.logService.deleteAll().subscribe({
            next: async (response) => {
                await this.getAll();
                this.snackBarService.open(response.message);
                this.vm.tab = 0;
            },
            error: (error) => this.snackBarService.open(error),
        });
    }
}
