import { Component, OnInit } from '@angular/core';
import { ActionForOptionI } from 'src/app/interfaces/action-for-option.interface';
import { RoundService } from 'src/app/services';
import { RoundListViewModel } from './model/round-list.view-model';

@Component({
    selector: 'page-round-list',
    templateUrl: 'round-list.page.html',
})
export class RoundListPage implements OnInit {
    vm = new RoundListViewModel();
    constructor(private roundService: RoundService) {}

    ngOnInit() {
        this.getAll();
    }

    async getAll(showMore = false) {
        this.vm.optionsTable.loading = true;
        this.roundService.getAll(this.vm.roundBody).subscribe({
            next: (response) => {
                if (!showMore) {
                    this.vm.optionsTable.items = response.items;
                    this.vm.optionsTable.loading = false;
                    this.vm.optionsTitle.title = `Rondas (${response.paginator.total})`;
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
        // TODO: Implementar
        console.log(option);
    }

    onChangeOrder(order: string) {
        if (
            !this.vm.roundBody.order ||
            this.vm.roundBody.order.filter((item: string) => item === 'desc')
                .length > 0
        ) {
            this.vm.roundBody.order = [order, 'asc'];
            this.getAll();
        } else {
            this.vm.roundBody.order = [order, 'desc'];
            this.getAll();
        }
    }

    onChangePage() {
        this.vm.roundBody.page += 1;
        this.getAll(true);
    }
}
