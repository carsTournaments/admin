import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActionForOptionI, CacheGetAllI } from '@interfaces';
import { Toggle } from '@models';
import { AlertService, CacheService, SnackBarService } from '@services';
import { CacheListViewModel } from '../../models/cache-list.view-model';

@Component({
    selector: 'cache-list',
    templateUrl: 'cache-list.page.html',
})
export class CacheListPage {
    vm = new CacheListViewModel();
    constructor(
        private cacheService: CacheService,
        private router: Router,
        private snackBarService: SnackBarService,
        private alertService: AlertService
    ) {}

    ngOnInit() {
        this.getAll();
    }

    async getAll() {
        this.vm.optionsTable.loading = true;
        this.cacheService.getAll().subscribe({
            next: (response) => {
                this.vm.optionsTable.items = response;
                this.vm.optionsTable.loading = false;
                this.vm.title = `Cache (${response.length})`;
            },
            error: (error) => {
                this.vm.optionsTable.loading = false;
                this.snackBarService.open(error);
            },
        });
    }

    onRowClick(event: { rowData: CacheGetAllI; index: number }) {
        this.deleteOne(event.rowData.name);
    }

    actionForOption(option: ActionForOptionI) {
        console.log(option);
        if (option.value === 'deleteAll') {
            this.deleteAll();
        }
    }

    async deleteOne(name: string) {
        const alert = await this.alertService.showConfirmation(
            'Eliminar de la cache',
            `¿Estas seguro de eliminar la key ${name} de la cache?`
        );
        alert.subscribe((data) => {
            if (data) {
                this.cacheService.delete(name).subscribe({
                    next: (response) => this.onSuccessDelete(response),
                    error: (error) => this.snackBarService.open(error),
                });
            }
        });
    }

    async deleteAll() {
        const alert = await this.alertService.showConfirmation(
            'Eliminar toda la cache',
            '¿Estas seguro de eliminar toda la cache?'
        );
        alert.subscribe((data) => {
            if (data) {
                this.cacheService.deleteAll().subscribe({
                    next: (response) => this.onSuccessDelete(response),
                    error: (error) => this.snackBarService.open(error),
                });
            }
        });
    }

    onSuccessDelete(response: { message: string }) {
        this.snackBarService.open(response.message);
        this.getAll();
    }
}
