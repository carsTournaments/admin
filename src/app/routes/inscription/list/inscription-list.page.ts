import { Component, OnInit } from '@angular/core';
import { AlertService, InscriptionService, SnackBarService } from '@services';
import { InscriptionListViewModel } from './model/inscription-list.view-model';

@Component({
    selector: 'page-inscription-list',
    templateUrl: 'inscription-list.page.html',
})
export class InscriptionListPage implements OnInit {
    vm = new InscriptionListViewModel();
    constructor(
        private inscriptionService: InscriptionService,
        private snackBarService: SnackBarService,
        private alertService: AlertService
    ) {}

    ngOnInit() {
        this.getAll();
    }

    async getAll(showMore = false) {
        this.vm.optionsTable.loading = true;
        this.inscriptionService.getAll(this.vm.inscriptionBody).subscribe({
            next: (response) => {
                if (!showMore) {
                    this.vm.optionsTable.items = response.items;
                    this.vm.optionsTable.loading = false;
                    this.vm.optionsTitle.title = `Inscripciones (${response.paginator.total})`;
                } else {
                    this.vm.optionsTable.items = [
                        ...this.vm.optionsTable.items,
                        ...response.items,
                    ];
                }
            },
            error: (error) => {
                this.vm.optionsTable.error = true;
                this.snackBarService.open(error);
            },
        });
        this.vm.optionsTable.loading = false;
    }

    onChangeOrder(order: string) {
        if (
            !this.vm.inscriptionBody.order ||
            this.vm.inscriptionBody.order.filter(
                (item: string) => item === 'desc'
            ).length > 0
        ) {
            this.vm.inscriptionBody.order = [order, 'asc'];
            this.getAll();
        } else {
            this.vm.inscriptionBody.order = [order, 'desc'];
            this.getAll();
        }
    }

    onChangePage() {
        this.vm.inscriptionBody.page += 1;
        this.getAll(true);
    }

    async onDeleteItem(id: string) {
        const alert = await this.alertService.showConfirmation(
            'Eliminar inscripcion',
            '¿Está seguro de eliminar la inscripcion?'
        );
        alert.subscribe((data) => {
            if (data) {
                this.inscriptionService.deleteOne(id).subscribe({
                    next: () => {
                        this.snackBarService.open('Inscripcion eliminada');
                        this.getAll();
                    },
                    error: (error) => this.snackBarService.open(error),
                });
            }
        });
    }
}
