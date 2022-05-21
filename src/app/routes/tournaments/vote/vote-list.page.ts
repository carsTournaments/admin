import { Component, OnInit } from '@angular/core';
import { ActionForOptionI } from '@interfaces/action-for-option.interface';
import { VoteService } from '@services';
import { VoteListViewModel } from './model/vote-list.view-model';

@Component({
    selector: 'page-vote-list',
    templateUrl: 'vote-list.page.html',
})
export class VoteListPage implements OnInit {
    vm = new VoteListViewModel();
    constructor(private voteService: VoteService) {}

    ngOnInit() {
        this.getAll();
    }

    async getAll(showMore = false) {
        this.vm.optionsTable.loading = true;
        this.voteService.getAll(this.vm.voteBody).subscribe({
            next: (response) => {
                if (!showMore) {
                    this.vm.optionsTable.items = response.items;
                    this.vm.optionsTable.loading = false;
                    this.vm.optionsTitle.title = `Votos (${response.paginator.total})`;
                } else {
                    this.vm.optionsTable.items = [
                        ...this.vm.optionsTable.items,
                        ...response.items,
                    ];
                }
            },
            error: (error) => {
                this.vm.optionsTable.error = true;
                console.error(error);
            },
        });
        this.vm.optionsTable.loading = false;
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
        if (confirm('¿Estás seguro de eliminar todos los votos?')) {
            this.voteService.deleteAll().subscribe({
                next: () => {
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
}
