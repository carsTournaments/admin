import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Report } from '@models';
import { AlertService, ReportService, SnackBarService } from '@services';
import { ReportListViewModel } from './model/report-list.view-model';

@Component({
    selector: 'page-Report-list',
    templateUrl: 'report-list.page.html',
})
export class ReportListPage implements OnInit {
    vm = new ReportListViewModel();
    constructor(
        private reportService: ReportService,
        private alertService: AlertService,
        private snackBarService: SnackBarService,
        private router: Router
    ) {}

    ngOnInit() {
        this.getAll();
    }

    async getAll(showMore = false) {
        this.vm.optionsTable.loading = true;
        this.reportService.getAll(this.vm.ReportBody).subscribe({
            next: (response) => {
                if (!showMore) {
                    this.vm.optionsTable.items = response.items;
                    this.vm.optionsTable.loading = false;
                    this.vm.title = `Reportes (${response.paginator.total})`;
                } else {
                    this.vm.optionsTable.items = [
                        ...this.vm.optionsTable.items,
                        ...response.items,
                    ];
                }
            },
            error: (error) => {
                this.vm.optionsTable.loading = false;
                this.snackBarService.open(error);
            },
        });
    }

    actionForOption() {
        this.deleteAll();
    }

    async deleteAll() {
        const alert = await this.alertService.showConfirmation(
            'Eliminar reportes',
            '¿Está seguro de eliminar todos los reportes?'
        );
        alert.subscribe((data) => {
            if (data) {
                this.vm.optionsTable.loading = true;
                this.reportService.deleteAll().subscribe({
                    next: () => {
                        this.snackBarService.open(
                            'Todos los reportes han sido eliminados'
                        );
                        this.getAll();
                    },
                    error: (error) => this.snackBarService.open(error),
                });
                this.vm.optionsTable.loading = false;
            }
        });
    }

    onChangeOrder(order: string) {
        if (
            !this.vm.ReportBody.order ||
            this.vm.ReportBody.order.filter((item: string) => item === 'desc')
                .length > 0
        ) {
            this.vm.ReportBody.order = [order, 'asc'];
            this.getAll();
        } else {
            this.vm.ReportBody.order = [order, 'desc'];
            this.getAll();
        }
    }

    onChangePage() {
        this.vm.ReportBody.page += 1;
        this.getAll(true);
    }

    onRowClick(event: { rowData: Report; index: number }) {
        this.router.navigate([`/reports/one/${event.rowData._id}`]);
    }
}
