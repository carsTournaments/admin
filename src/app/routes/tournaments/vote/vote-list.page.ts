import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OptionItemI } from '@interfaces';
import { Vote } from '@models';
import { AlertService, SnackBarService, VoteService } from '@services';
import { VoteListViewModel } from './model/vote-list.view-model';

@Component({
    selector: 'page-vote-list',
    templateUrl: 'vote-list.page.html',
})
export class VoteListPage implements OnInit {
    vm = new VoteListViewModel();
    constructor(
        private voteService: VoteService,
        private alertService: AlertService,
        private snackBarService: SnackBarService,
        private router: Router
    ) {}

    ngOnInit() {
        this.getAll();
    }

    async getAll(showMore = false) {
        this.vm.optionsTable.loading = true;
        this.voteService.getAll(this.vm.voteBody).subscribe({
            next: (response) => {
                if (!showMore) {
                    this.vm.optionsTable.items = response.items;
                    this.vm.title = `Votos (${response.paginator.total})`;
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

    actionForOption(option: OptionItemI) {
        if (option.value === 'createFakeVotes') {
            this.createFakeVotes();
        } else if (option.value === 'cleanVotes') {
            this.cleanVotes();
        } else if (option.value === 'deleteAll') {
            this.deleteAll();
        }
    }

    createFakeVotes() {
        this.alertService
            .showPrompt('Crear votos', '¿Cuantos votos deseas crear?', 'number')
            .subscribe((response) => {
                if (response && response.value) {
                    this.voteService
                        .createFakeVotes({ total: Number(response.value) })
                        .subscribe((response) => {
                            this.snackBarService.open(response.message);
                            this.vm.voteBody.page = 1;
                            this.getAll();
                        });
                }
            });
    }

    cleanVotes() {
        this.voteService.cleanVotes().subscribe({
            next: (response) => {
                this.vm.voteBody.page = 1;
                this.snackBarService.open(response.message);
                this.getAll();
            },
        });
    }

    async deleteAll() {
        if (confirm('¿Estás seguro de eliminar todos los votos?')) {
            this.voteService.deleteAll().subscribe({
                next: () => {
                    this.vm.voteBody.page = 1;
                    this.getAll();
                },
                error: (error) => console.error(error),
            });
        }
    }

    onChangeOrder(order: string) {
        if (
            !this.vm.voteBody.order ||
            this.vm.voteBody.order.filter((item: string) => item === 'desc')
                .length > 0
        ) {
            this.vm.voteBody.order = [order, 'asc'];
            this.getAll();
        } else {
            this.vm.voteBody.order = [order, 'desc'];
            this.getAll();
        }
    }

    onChangePage() {
        this.vm.voteBody.page += 1;
        this.getAll(true);
    }

    onRowClick(event: { value: string; row: Vote }) {
        const value = event.value;
        if (value === 'viewTournamentProfile') {
            this.router.navigate([
                '/tournaments/one',
                event.row.tournament._id,
            ]);
        } else if (value === 'viewCarProfile') {
            this.router.navigate(['/cars/one', event.row.car._id]);
        } else if (value === 'viewUserProfile') {
            this.router.navigate(['/users/one', event.row.user._id]);
        } else if (value === 'deleteVote') {
            this.onDeleteItem(event.row._id!);
        }
    }

    async onDeleteItem(id: string) {
        const alert = this.alertService.showConfirmation(
            'Eliminar voto',
            '¿Estas seguro de eliminar el voto?'
        );
        alert.subscribe((data) => {
            if (data) {
                this.voteService.deleteOne(id).subscribe({
                    next: (response) => {
                        this.vm.voteBody.page = 1;
                        this.snackBarService.open(response.message);
                        this.getAll();
                    },
                    error: (error) => this.snackBarService.open(error),
                });
            }
        });
    }
}
