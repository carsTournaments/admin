import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlertService } from '@services';
import { CustomTableDialogComponent } from './dialog/custom-table.dialog.component';
import { CustomTableColumnsModel } from './models/custom-table.columns-model';
import { CustomTableOptionsModel } from './models/custom-table.options-model';

@Component({
    selector: 'custom-table',
    templateUrl: 'custom-table.component.html',
    styleUrls: ['./custom-table.component.scss'],
})
export class CustomTableComponent {
    @Input() options: CustomTableOptionsModel = new CustomTableOptionsModel();
    columnsModel = new CustomTableColumnsModel();
    @Output() changePage = new EventEmitter();
    @Output() rowClick = new EventEmitter<any>();

    constructor(private alertService: AlertService) {}

    async openDialog(event: any) {
        const dialog = await this.alertService.openDialog(
            CustomTableDialogComponent,
            {
                row: event.rowData,
                items: this.options.dialogItems,
            }
        );
        dialog.subscribe((data) => {
            if (data && data.value) {
                this.rowClick.emit({ value: data.value, row: event.rowData });
            }
        });
    }
}
