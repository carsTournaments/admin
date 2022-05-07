import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SegmentsViewModel } from './model/segments.view-model';

@Component({
    selector: 'segments',
    templateUrl: 'segments.component.html',
})
export class SegmentsComponent {
    @Input() options = new SegmentsViewModel();
    @Output() changeSegment = new EventEmitter<number>();

    onChangeSegment(i: number) {
        this.changeSegment.emit(i);
        this.options.currentSegment = i;
    }
}
