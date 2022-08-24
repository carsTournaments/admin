import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OptionItemI } from '@interfaces';

@Component({
    selector: 'custom-table-dialog',
    templateUrl: 'custom-table.dialog.component.html',
})
export class CustomTableDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<any>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

    clickAndClose(item: OptionItemI): void {
        this.dialogRef.close({ value: item.value });
    }
}
