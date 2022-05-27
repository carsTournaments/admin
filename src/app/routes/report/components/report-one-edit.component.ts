import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Report } from '@models';
import { ReportService, SnackBarService } from '@services';

@Component({
    selector: 'report-one-edit',
    templateUrl: 'report-one-edit.component.html',
})
export class ReportOneEditComponent {
    @Input() item = new Report();
    constructor(
        private reportService: ReportService,
        private snackBarService: SnackBarService,
        private router: Router
    ) {}

    async onSubmit() {
        this.reportService.update(this.item).subscribe({
            next: () => {
                this.snackBarService.open('Reporte actualizado');
                this.router.navigate(['/reports']);
            },
            error: (error) => this.snackBarService.open(error),
        });
    }
}
