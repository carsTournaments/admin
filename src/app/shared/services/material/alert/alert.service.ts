import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AlertComponent } from '@components/alert/alert.component';

@Injectable({ providedIn: 'root' })
export class AlertService {
    defaultButtons = [
        {
            text: 'Cancelar',
            role: 'cancel',
        },
        {
            text: 'Aceptar',
            role: 'accept',
        },
    ];
    constructor(private dialog: MatDialog) {}

    async showConfirmation(
        title: string,
        message: string,
        buttons = this.defaultButtons
    ): Promise<Observable<boolean>> {
        const dialogRef = this.dialog.open(AlertComponent, {
            data: {
                message,
                title,
                buttons,
            },
        });
        return dialogRef.afterClosed();
    }

    async openDialog(component: any): Promise<Observable<any>> {
        const options: MatDialogConfig = {
            panelClass: 'dialog-component',
        };
        const dialogRef = this.dialog.open(component, options);
        return dialogRef.afterClosed();
    }
}
