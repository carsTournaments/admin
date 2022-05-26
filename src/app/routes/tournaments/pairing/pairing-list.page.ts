import { Component, OnInit } from '@angular/core';
import { VoteNewComponent } from '@components';
import { ActionForOptionI } from '@interfaces/action-for-option.interface';
import { Pairing } from '@models';
import { AlertService, PairingService } from '@services';
import { PairingListViewModel } from './model/pairing-list.view-model';

@Component({
    selector: 'page-pairing-list',
    templateUrl: 'pairing-list.page.html',
})
export class PairingListPage implements OnInit {
    vm = new PairingListViewModel();
    constructor(
        private pairingService: PairingService,
        private alertService: AlertService
    ) {}

    ngOnInit() {
        this.getAll();
    }

    async getAll(showMore = false) {
        this.vm.optionsTable.loading = true;
        this.pairingService.getAll(this.vm.pairingBody).subscribe({
            next: (response) => {
                if (!showMore) {
                    this.vm.optionsTable.items = response.items;
                    this.vm.optionsTable.loading = false;
                    this.vm.title = `Emparejamientos (${response.paginator.total})`;
                } else {
                    this.vm.optionsTable.items = [
                        ...this.vm.optionsTable.items,
                        ...response.items,
                    ];
                }
            },
            error: (error) => {
                this.vm.optionsTable.loading = false;
                console.error(error);
            },
        });
    }

    actionForOption(option: ActionForOptionI) {
        switch (option.value) {
            case 'deleteAll':
                this.deleteAll();
                break;
            default:
                break;
        }
    }

    async deleteAll() {
        try {
            if (
                confirm('¿Está seguro de eliminar todos los emparejamientos?')
            ) {
                this.vm.optionsTable.loading = true;
                this.pairingService.deleteAll().subscribe({
                    next: () => {
                        alert('Todos los emparejamientos eliminados');
                        this.getAll();
                    },
                    error: (error) => alert(error),
                });
                this.vm.optionsTable.loading = false;
            }
        } catch (error) {
            console.error(error);
        }
    }

    onChangeOrder(order: string) {
        if (
            !this.vm.pairingBody.order ||
            this.vm.pairingBody.order.filter((item: string) => item === 'desc')
                .length > 0
        ) {
            this.vm.pairingBody.order = [order, 'asc'];
            this.getAll();
        } else {
            this.vm.pairingBody.order = [order, 'desc'];
            this.getAll();
        }
    }

    onChangePage() {
        this.vm.pairingBody.page += 1;
        this.getAll(true);
    }

    async onRowClickPairing(event: { rowData: Pairing; index: number }) {
        const alert = await this.alertService.openDialog(VoteNewComponent, {
            car1: event.rowData.car1,
            car2: event.rowData.car2,
            round: event.rowData.round._id!,
            tournament: event.rowData.tournament._id!,
            pairing: event.rowData._id!,
        });
        alert.subscribe((data) => {
            if (data) {
                this.getAll();
            }
        });
    }
}
