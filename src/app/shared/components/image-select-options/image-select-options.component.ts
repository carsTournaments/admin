import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { OptionItemI } from '@interfaces';

@Component({
    selector: 'image-select-options',
    templateUrl: 'image-select-options.component.html',
})
export class ImageSelectOptionsComponent {
    options: OptionItemI[] = [
        {
            name: 'Eliminar',
            value: 'delete',
        },
        {
            name: 'Ver imagen',
            value: 'view',
        },
    ];
    constructor(public dialogRef: MatDialogRef<any>) {}

    close(value?: string) {
        this.dialogRef.close({ value });
    }
}
