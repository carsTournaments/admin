import { Component, OnInit } from '@angular/core';
import { ActionForOptionI } from '@interfaces/action-for-option.interface';
import { AlertService, SnackBarService } from '@services';
import { ImageService } from '@services/api/image/image.service';
import { ImageListViewModel } from './model/image-list.view-model';

@Component({
    selector: 'page-image-list',
    templateUrl: 'image-list.page.html',
})
export class ImageListPage implements OnInit {
    vm = new ImageListViewModel();
    constructor(
        private imageService: ImageService,
        private snackBarService: SnackBarService,
        private alertService: AlertService
    ) {}

    ngOnInit() {
        this.getAll();
    }

    async getAll(showMore = false) {
        this.vm.optionsTable.loading = true;
        this.imageService.getAll(this.vm.imageBody).subscribe({
            next: (response) => {
                if (!showMore) {
                    this.vm.optionsTable.items = response.items;
                    this.vm.title = `Imagenes (${response.paginator.total})`;
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

    actionForOption(option: ActionForOptionI) {
        if (option.value === 'deleteAll') {
            this.deleteAll();
        }
    }

    async deleteAll() {
        if (confirm('¿Está seguro de eliminar todas las imagenes?')) {
            this.imageService.deleteAll().subscribe({
                next: () => {
                    this.snackBarService.open('Imagenes eliminadas');
                    this.getAll();
                },
                error: (error) => this.snackBarService.open(error),
            });
        }
    }

    onChangeOrder(order: string) {
        if (
            !this.vm.imageBody.order ||
            this.vm.imageBody.order.filter((item: string) => item === 'desc')
                .length > 0
        ) {
            this.vm.imageBody.order = [order, 'asc'];
            this.getAll();
        } else {
            this.vm.imageBody.order = [order, 'desc'];
            this.getAll();
        }
    }

    onChangePage() {
        this.vm.imageBody.page += 1;
        this.getAll(true);
    }

    async onDeleteItem(id: string) {
        const alert = await this.alertService.showConfirmation(
            'Eliminar imagen',
            'Vas a eliminar la imagen, ¿estas seguro?'
        );
        alert.subscribe((data) => {
            if (data) {
                this.imageService.deleteOne(id).subscribe({
                    next: () => this.getAll(),
                    error: (error) => this.snackBarService.open(error),
                });
            }
        });
    }
}
