import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Winner } from '@models';
import { WinnerService } from '@services';
import { WinnerListViewModel } from './model/winner-list.view-model';

@Component({
    selector: 'page-winner-list',
    templateUrl: 'winner-list.page.html',
})
export class WinnerListPage implements OnInit {
    vm = new WinnerListViewModel();
    constructor(private winnerService: WinnerService, private router: Router) {}

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

    onRowClick(event: { value: string; row: Winner }) {
        const value = event.value;
        if (value === 'viewGoldProfile') {
            this.router.navigate(['/cars/one', event.row.gold._id]);
        } else if (value === 'viewSilverProfile') {
            this.router.navigate(['/cars/one', event.row.silver._id]);
        } else if (value === 'viewBronzeProfile') {
            this.router.navigate(['/cars/one', event.row.bronze._id]);
        } else if (value === 'viewTournamentProfile') {
            this.router.navigate([
                '/tournaments/one',
                event.row.tournament._id,
            ]);
        }
    }

    onChangePage() {
        this.vm.winnerBody.page += 1;
        this.getAll(true);
    }
}
