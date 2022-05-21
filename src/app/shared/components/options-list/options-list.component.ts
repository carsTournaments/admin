import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OptionItemI } from '@interfaces/option-item.interface';

@Component({
    selector: 'options-list',
    templateUrl: 'options-list.component.html',
})
export class OptionsListComponent {
    @Input() options: OptionItemI[] = [];
    @Output() action: EventEmitter<OptionItemI> = new EventEmitter();
}
