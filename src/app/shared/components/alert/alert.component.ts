import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-alert', // Replace with your own selector
    templateUrl: 'alert.component.html',
})
export class AlertComponent {
    localData: any;

    constructor(
        public dialogRef: MatDialogRef<AlertComponent>,
        @Optional() @Inject(MAT_DIALOG_DATA) public data: any
    ) {
        this.localData = { ...data };
        if (data.type && data.type === 'text') {
            this.localData.value = '';
        } else {
            this.localData.value = 1;
        }
    }

    clickButton(role: any): void {
        if (role === 'cancel') {
            this.dialogRef.close(false);
        } else if (this.localData.type) {
            this.dialogRef.close({ value: this.localData.value });
        } else {
            this.dialogRef.close(true);
        }
    }
}
