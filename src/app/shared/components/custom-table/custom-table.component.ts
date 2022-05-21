import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CustomTableOptionsModel } from './model/custom-table.options-model';
import { CustomTableViewModel } from './model/custom-table.view.model';
import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs';

@Component({
    selector: 'custom-table',
    templateUrl: 'custom-table.component.html',
    styleUrls: ['custom-table.component.scss'],
})
export class CustomTableComponent {
    @Input() options = new CustomTableOptionsModel();
    vm = new CustomTableViewModel();
    @Output() changeOrder = new EventEmitter<string>();
    @Output() changePage = new EventEmitter();
    @Output() deleteItem = new EventEmitter();
    @Output() clickItem = new EventEmitter();
    data!: any;
    displayedColumns = [
        'image',
        'brand',
        'model',
        'cc',
        'cv',
        'updated',
        'created',
    ];

    constructor() {
        setTimeout(() => {
            this.data = new BasicDataSource(this.options.items);
        }, 1000);
    }
    openImage(image: string) {
        window.open(image, '_blank');
    }

    onChangeOrder(order: string | null): void {
        if (order) {
            this.changeOrder.emit(order);
        }
    }
}

export class BasicDataSource extends DataSource<any> {
    dataChange: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

    constructor(data: any[]) {
        super();
        this.dataChange.next(data);
    }

    connect(): Observable<any[]> {
        return this.dataChange;
    }

    disconnect() {
        // TODO: Nada
    }
}
