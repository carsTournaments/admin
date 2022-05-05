import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'toggle',
    templateUrl: 'toggle.component.html',
})
export class ToggleComponent implements OnInit {
    @Input() checked: boolean = false;
    @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>();
    constructor() {}

    ngOnInit() {}
}
