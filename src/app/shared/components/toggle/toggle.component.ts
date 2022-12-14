import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'toggle',
    templateUrl: 'toggle.component.html',
})
export class ToggleComponent {
    @Input() checked = false;
    @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>();
}
