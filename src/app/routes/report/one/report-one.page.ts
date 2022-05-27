import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionForOptionI } from '@interfaces/action-for-option.interface';
import { AlertService, ReportService, SnackBarService } from '@services';
import { ReportOnePageViewModel } from './model/report-one.view-model';

@Component({
    selector: 'page-report-one',
    templateUrl: 'report-one.page.html',
})
export class ReportOnePage implements OnInit {
    vm = new ReportOnePageViewModel();
    constructor(
        private route: ActivatedRoute,
        private reportService: ReportService,
        private router: Router,
        private snackBarService: SnackBarService,
        private alertService: AlertService
    ) {}

    ngOnInit() {
        this.vm.id = this.route.snapshot.paramMap.get('id') as string;
        this.vm.title = 'Editar Reporte';
        this.vm.edit = true;
        this.getOne();
    }

    async getOne() {
        this.reportService.getOne({ id: this.vm.id, site: 'admin' }).subscribe({
            next: (item) => (this.vm.item = item),
            error: (error) => this.snackBarService.open(error),
        });
    }

    actionForOption(option: ActionForOptionI) {
        switch (option.value) {
            case 'delete':
                this.deleteReport();
                break;
        }
    }

    async deleteReport() {
        const alert = await this.alertService.showConfirmation(
            'Eliminar reporte',
            '¿Está seguro de eliminar el reporte?'
        );
        alert.subscribe((data) => {
            if (data) {
                this.reportService.delete(this.vm.id).subscribe({
                    next: () => {
                        this.snackBarService.open('Reporte eliminado');
                        this.router.navigate(['/reports']);
                    },

                    error: (error) => this.snackBarService.open(error),
                });
            }
        });
    }
}
