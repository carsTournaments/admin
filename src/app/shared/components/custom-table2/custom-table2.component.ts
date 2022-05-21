import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CustomTableColumnsModel } from './models/custom-table2.columns-model';
import { CustomTable2OptionsModel } from './models/custom-table2.options-model';

@Component({
    selector: 'custom-table2',
    templateUrl: 'custom-table2.component.html',
})
export class CustomTable2Component {
    @Input() options: CustomTable2OptionsModel = new CustomTable2OptionsModel();
    columnsModel = new CustomTableColumnsModel();
    @Output() changePage = new EventEmitter();
    @Output() rowClick = new EventEmitter<any>();
    constructor() {}
}
