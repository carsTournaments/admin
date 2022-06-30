import { Component, OnInit } from '@angular/core';
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
                    this.vm.title = `Ganadores (${response.paginator.total})`;
                } else {
                    this.vm.optionsTable.items = [
                        ...this.vm.optionsTable.items,
                        ...response.items,
                    ];
                }
                this.vm.optionsTable.loading = false;
            },
            error: () => (this.vm.optionsTable.loading = false),
        });
    }

    actionForOption() {
        this.deleteAll();
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
