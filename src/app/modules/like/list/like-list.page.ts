import { Component, OnInit } from '@angular/core';
import { ActionForOptionI } from 'src/app/interfaces/action-for-option.interface';
import { LikeService } from 'src/app/services/like/like.service';
import { LikeListViewModel } from './model/like-list.view-model';

@Component({
    selector: 'page-like-list',
    templateUrl: 'like-list.page.html',
})
export class LikeListPage implements OnInit {
    vm = new LikeListViewModel();
    constructor(private likesService: LikeService) {}

    ngOnInit() {
        this.getAll();
    }

    async getAll(showMore = false) {
        this.vm.optionsTable.loading = true;
        this.likesService.getAll(this.vm.pairingBody).subscribe({
            next: (response) => {
                if (!showMore) {
                    this.vm.optionsTable.items = response.items;
                    this.vm.optionsTable.loading = false;
                    this.vm.optionsTitle.title = `Emparejamientos (${response.paginator.total})`;
                } else {
                    this.vm.optionsTable.items = [
                        ...this.vm.optionsTable.items,
                        ...response.items,
                    ];
                }
            },
            error: (error) => {
                this.vm.optionsTable.loading = false;
                this.vm.optionsTable.error = true;
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
                this.likesService.deleteAll().subscribe({
                    next: () => {
                        alert('Todos los emparejamientos eliminados');
                        this.getAll();
                    },
                    error: (error) => alert(error),
                });
                this.vm.optionsTable.loading = false;
            }
        } catch (error) {
            this.vm.optionsTable.error = true;
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
}
