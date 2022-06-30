import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Image } from '@models';
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
        private alertService: AlertService,
        private router: Router
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

    actionForOption() {
        this.deleteAll();
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

    onChangePage() {
        this.vm.imageBody.page += 1;
        this.getAll(true);
    }

    onRowClick(event: { rowData: Image; index: number }) {
        this.onDeleteItem(event.rowData._id!);
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
