import { Component, OnInit } from '@angular/core';
import { ActionForOptionI } from '@interfaces/action-for-option.interface';
import { WinnerService } from '@services';
import { WinnerListViewModel } from './model/winner-list.view-model';

@Component({
    selector: 'page-winner-list',
    templateUrl: 'winner-list.page.html',
})
export class WinnerListPage implements OnInit {
    vm = new WinnerListViewModel();
    constructor(private winnerService: WinnerService) {}

    ngOnInit() {
        this.getAll();
    }

    async getAll(showMore = false) {
        this.vm.optionsTable.loading = true;
        this.winnerService.getAll(this.vm.winnerBody).subscribe({
            next: (response) => {
                if (!showMore) {
                    this.vm.optionsTable.items = response.items;
                    this.vm.optionsTable.loading = false;
                    this.vm.title = `Ganadores (${response.paginator.total})`;
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
                this.winnerService.deleteAll().subscribe({
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

    onChangePage() {
        this.vm.winnerBody.page += 1;
        this.getAll(true);
    }
}
