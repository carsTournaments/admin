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

    showConfirmation(
        title: string,
        message: string,
        buttons = this.defaultButtons
    ): Observable<boolean> {
        const dialogRef = this.dialog.open(AlertComponent, {
            data: {
                message,
                title,
                buttons,
            },
        });
        return dialogRef.afterClosed();
    }

    showPrompt(
        title: string,
        message: string,
        type: 'text' | 'number' = 'text',
        buttons = this.defaultButtons
    ): Observable<{ value: any }> {
        const dialogRef = this.dialog.open(AlertComponent, {
            data: {
                message,
                title,
                type,
                buttons,
            },
        });
        return dialogRef.afterClosed();
    }

    async openDialog(component: any, data?: any): Promise<Observable<any>> {
        const options: MatDialogConfig = {
            panelClass: 'dialog-component',
            data,
        };
        const dialogRef = this.dialog.open(component, options);
        return dialogRef.afterClosed();
    }
}
