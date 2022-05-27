import { Component, EventEmitter, Input, Output } from '@angular/core';
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
}
