import { Component, OnInit } from '@angular/core';
import { ActionForOptionI } from '@interfaces';
import { LogService, SnackBarService } from '@services';
import { LogI } from '@services/api/log/log.interface';
import { LogListViewModel } from '../models/log-list.view-model';
import { TotalItemI } from '../../../../shared/interfaces/total-item.interface';

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

    async getAll(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.vm.optionsTable.loading = true;
            this.logService.getAll(this.vm.logsParams).subscribe({
                next: (response) => this.onGetAllSuccess(response, resolve),
                error: (error) => {
                    this.vm.optionsTable.loading = false;
                    this.snackBarService.open(error);
                    reject(error);
                },
            });
        });
    }

    private onGetAllSuccess(response: LogI[], resolve: any) {
        this.vm.optionsTable.items = response;
        this.setTotals();
        this.vm.optionsTable.loading = false;
        resolve();
    }
    private setDefaultTotals() {
        this.vm.totals = [
            { name: 'info', value: 0, color: '#2096f3' },
            { name: 'http', value: 0, color: '#4caf4f' },
            { name: 'warn', value: 0, color: '#ff9800' },
            { name: 'error', value: 0, color: '#f44336' },
        ];
    }

    private setTotals(): void {
        this.setDefaultTotals();
        const items = this.vm.optionsTable.items;
        for (const item of items) {
            for (const total of this.vm.totals) {
                if (item.level === total.name) {
                    total.value += 1;
                }
            }
        }
        this.deleteZeroItemsTotal();
    }

    private deleteZeroItemsTotal(): void {
        this.vm.totals.forEach((total, i) => {
            if (total.value === 0) {
                this.vm.totals.splice(i, 1);
            }
        });
    }

    actionForOption(option: ActionForOptionI): void {
        if (option.value === 'deleteAll') {
            this.deleteAll();
        }
    }

    private deleteAll(): void {
        this.logService.deleteAll().subscribe({
            next: async (response) => {
                await this.getAll();
                this.snackBarService.open(response.message);
                this.vm.tab = 0;
            },
            error: (error) => this.snackBarService.open(error),
        });
    }

    async onClickTotal(item: TotalItemI): Promise<void> {
        if (this.vm.filtered.state) {
            if (this.vm.filtered.filter === item.name) {
                this.vm.filtered = { state: false, filter: '' };
                this.getAll();
            } else {
                await this.getAll();
                this.filterItems(item);
                this.vm.filtered = { state: true, filter: item.name };
            }
        } else {
            this.filterItems(item);
            this.vm.filtered = { state: true, filter: item.name };
        }
        console.log(item, this.vm.filtered);
    }

    private filterItems(item: TotalItemI): void {
        this.vm.optionsTable.items = this.vm.optionsTable.items.filter(
            (i) => i.level === item.name
        );
    }
}
