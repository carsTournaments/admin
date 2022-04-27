import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AlertComponent } from 'src/app/components/alert/alert.component';

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

    public async showConfirmation(
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
}
