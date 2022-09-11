import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImageSelectOptionsComponent } from '@components/image-select-options/image-select-options.component';
import { environment } from '@env/environment';
import { Image } from '@models/image.model';
import { AlertService, SnackBarService } from '@services';
import { ImageService } from '@services/api/image/image.service';

@Component({
    selector: 'add-image',
    templateUrl: 'add-image.component.html',
    styleUrls: ['./add-image.component.scss'],
})
export class AddComponentComponent {
    @Input() id!: string;
    @Input() image!: Image;
    @Input() images!: Image[];
    @Input() type!: string;
    selectedFile?: ImageSnippet;
    @Output() imageAdded: EventEmitter<void> = new EventEmitter<void>();
    @Output() imageDelete: EventEmitter<Image> = new EventEmitter<Image>();
    constructor(
        private imageService: ImageService,
        private alertService: AlertService,
        private snackBarService: SnackBarService
    ) {}

    processFile(event: any) {
        const file: File = event.target.files[0];
        const reader = new FileReader();

        reader.addEventListener('load', (event: any) => {
            this.selectedFile = new ImageSnippet(event.target.result, file);
            this.imageService
                .upload(
                    { type: this.type, id: this.id },
                    this.selectedFile.file
                )
                .subscribe({
                    next: () => {
                        this.imageAdded.emit();
                        this.snackBarService.open(
                            'Image añadida correctamente'
                        );
                    },
                    error: (err) =>
                        this.snackBarService.open(
                            'Error al añadir imagen, ' + err
                        ),
                });
        });

        reader.readAsDataURL(file);
    }

    async onClickImage(image: Image) {
        const alert = await this.alertService.openDialog(
            ImageSelectOptionsComponent,
            { image }
        );
        alert.subscribe((data) => {
            if (data && data.value === 'view') {
                window.open(`${environment.urlImages}/${image.url}`, '_blank');
            } else if (data && data.value === 'setFirstImage') {
                this.setFirstImage(image);
            } else if (data && data.value === 'delete') {
                this.imageDelete.emit(image);
            }
        });
    }

    setFirstImage(image: Image) {
        this.imageService.setFirstImage(image._id!, image.car).subscribe({
            next: () => {
                this.imageAdded.emit();
                this.snackBarService.open('Imagen establecida como primera');
            },
        });
    }

    sortBy(prop: string) {
        return this.images.sort((a: any, b: any) => {
            if (a[prop] > b[prop]) {
                return 1;
            } else if (a[prop] === b[prop]) {
                return 0;
            }
            return -1;
        });
    }
}

class ImageSnippet {
    pending = false;
    status = 'init';
    constructor(public src: string, public file: File) {}
}
