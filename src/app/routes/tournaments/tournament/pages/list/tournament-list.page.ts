import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tournament } from '@models';
import { TournamentService } from '@services';
import { TournamentListViewModel } from '../../models/tournament-list.view-model';

@Component({
    selector: 'page-tournament-list',
    templateUrl: 'tournament-list.page.html',
})
export class TournamentListPage implements OnInit {
    vm = new TournamentListViewModel();
    constructor(
        private tournamentService: TournamentService,
        private router: Router
    ) {}

    ngOnInit() {
        this.getAll();
    }

    async getAll(showMore = false) {
        this.vm.optionsTable.loading = true;
        this.tournamentService.getAll(this.vm.tournamentBody).subscribe({
            next: (response) => {
                if (!showMore) {
                    this.vm.optionsTable.items = response.items;
                    this.vm.optionsTable.loading = false;
                    this.vm.title = `Torneos (${response.paginator.total})`;
                } else {
                    this.vm.optionsTable.items = [
                        ...this.vm.optionsTable.items,
                        ...response.items,
                    ];
                }
                this.vm.optionsTable.loading = false;
            },
        });
    }

    onChangeOrder(order: string) {
        if (
            !this.vm.tournamentBody.order ||
            this.vm.tournamentBody.order.filter(
                (item: string) => item === 'desc'
            ).length > 0
        ) {
            this.vm.tournamentBody.order = [order, 'asc'];
            this.getAll();
        } else {
            this.vm.tournamentBody.order = [order, 'desc'];
            this.getAll();
        }
    }

    onChangePage() {
        this.vm.tournamentBody.page += 1;
        this.getAll(true);
    }

    onRowClick(event: { rowData: Tournament; index: number }) {
        this.router.navigate([`/tournaments/one/${event.rowData._id}`]);
    }
}
