import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OptionItemI } from '@interfaces';
import { Image } from '@models';

@Component({
    selector: 'image-select-options',
    templateUrl: 'image-select-options.component.html',
})
export class ImageSelectOptionsComponent {
    options: OptionItemI[] = [];
    image: Image;
    constructor(
        public dialogRef: MatDialogRef<any>,
        @Optional() @Inject(MAT_DIALOG_DATA) public data: any
    ) {
        this.image = data.image;
        this.setOptions();
    }

    setOptions() {
        if (this.image.car && !this.image.firstImage) {
            this.options = [
                {
                    name: 'Ver imagen',
                    value: 'view',
                },
                {
                    name: 'Primera imagen',
                    value: 'setFirstImage',
                },
                {
                    name: 'Eliminar',
                    value: 'delete',
                },
            ];
        } else {
            this.options = [
                {
                    name: 'Ver imagen',
                    value: 'view',
                },
                {
                    name: 'Eliminar',
                    value: 'delete',
                },
            ];
        }
    }

    close(value?: string) {
        this.dialogRef.close({ value });
    }
}
