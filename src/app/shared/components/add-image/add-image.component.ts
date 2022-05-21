import { Component, Input } from '@angular/core';
import { Image } from '@models/image.model';
import { ImageService } from '@services/api/image/image.service';

@Component({
    selector: 'add-image',
    templateUrl: 'add-image.component.html',
})
export class AddComponentComponent {
    @Input() id!: string;
    @Input() image!: Image;
    @Input() type!: string;
    selectedFile?: ImageSnippet;
    constructor(private imageService: ImageService) {}

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
                    next: () => alert('Imagen subida'),
                    error: (err) => console.error(err),
                });
        });

        reader.readAsDataURL(file);
    }
}

class ImageSnippet {
    pending = false;
    status = 'init';
    constructor(public src: string, public file: File) {}
}
