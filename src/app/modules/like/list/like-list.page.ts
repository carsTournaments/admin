import { Component, OnInit } from '@angular/core';
import { ActionForOptionI } from 'src/app/interfaces/action-for-option.interface';
import { LikeService } from 'src/app/services';
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
        this.likesService.getAll(this.vm.likeBody).subscribe({
            next: (response) => {
                if (!showMore) {
                    this.vm.optionsTable.items = response.items;
                    this.vm.optionsTable.loading = false;
                    this.vm.optionsTitle.title = `Likes (${response.paginator.total})`;
                } else {
                    if (response.items.length > 0) {
                        this.vm.optionsTable.items = [
                            ...this.vm.optionsTable.items,
                            ...response.items,
                        ];
                        this.vm.optionsTable.loading = false;
                    } else {
                        this.vm.optionsTable.loading = false;
                        this.vm.optionsTable.showLoadMore = false;
                    }
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
            case 'cleanLikes':
                this.cleanLikes();
                break;
            case 'createFake':
                this.createFake();
                break;
            case 'deleteAll':
                this.deleteAll();
                break;
            default:
                break;
        }
    }

    createFake() {
        try {
            const total = prompt(
                'Ingrese la cantidad de emparejamientos a crear'
            );
            if (total) {
                this.vm.optionsTable.loading = true;
                this.likesService.createFake(Number(total)).subscribe({
                    next: () => {
                        alert('Likes creados');
                        this.getAll(true);
                        this.vm.optionsTable.loading = false;
                    },
                    error: (error) => {
                        this.vm.optionsTable.loading = false;
                        console.error(error);
                    },
                });
            }
        } catch (e) {
            console.error(e);
        }
    }

    cleanLikes() {
        try {
            if (confirm('¿Está seguro de hacer limpieza de likes?')) {
                this.vm.optionsTable.loading = true;
                this.likesService.cleanLikes().subscribe({
                    next: () => {
                        alert('Likes limpiados');
                        this.getAll(true);
                        this.vm.optionsTable.loading = false;
                    },
                    error: (error) => {
                        this.vm.optionsTable.loading = false;
                        console.error(error);
                    },
                });
            }
        } catch (e) {
            console.error(e);
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
            !this.vm.likeBody.order ||
            this.vm.likeBody.order.filter((item: string) => item === 'desc')
                .length > 0
        ) {
            this.vm.likeBody.order = [order, 'asc'];
            this.getAll();
        } else {
            this.vm.likeBody.order = [order, 'desc'];
            this.getAll();
        }
    }

    onChangePage() {
        this.vm.likeBody.page += 1;
        this.getAll(true);
    }
}
