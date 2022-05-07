import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'select-number-entries',
    templateUrl: 'select-number-entries.component.html',
})
export class SelectNumberEntriesComponent {
    @Input() initialValue = 20;
    @Output() onChangeView = new EventEmitter<number>();

    changeView() {
        this.onChangeView.emit(Number(this.initialValue));
    }
}
