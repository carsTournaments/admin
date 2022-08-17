import { Component, OnInit } from '@angular/core';
import { ImageSelectOptionsComponent } from '@components';
import { environment } from '@env/environment';
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

    onChangePage() {
        this.vm.imageBody.page += 1;
        this.getAll(true);
    }

    async onRowClick(event: { rowData: Image; index: number }) {
        const alert = await this.alertService.openDialog(
            ImageSelectOptionsComponent,
            { image: event.rowData }
        );
        alert.subscribe((data) => {
            if (data && data.value === 'view') {
                window.open(
                    `${environment.urlImages}/${event.rowData.url}`,
                    '_blank'
                );
            } else if (data && data.value === 'setFirstImage') {
                this.setFirstImage(event.rowData);
            } else if (data && data.value === 'delete') {
                this.onDeleteItem(event.rowData._id!);
            }
        });
    }

    setFirstImage(image: Image) {
        this.imageService.setFirstImage(image._id!, image.car._id).subscribe({
            next: () => {
                this.vm.imageBody.page = 1;
                this.getAll();
                this.snackBarService.open('Imagen establecida como primera');
            },
        });
    }

    async onDeleteItem(id: string) {
        const alert = await this.alertService.showConfirmation(
            'Eliminar imagen',
            'Vas a eliminar la imagen, ¿estas seguro?'
        );
        alert.subscribe((data) => {
            if (data) {
                this.imageService.deleteOne(id).subscribe({
                    next: () => {
                        this.vm.imageBody.page = 1;
                        this.getAll();
                    },
                    error: (error) => this.snackBarService.open(error),
                });
            }
        });
    }
}
