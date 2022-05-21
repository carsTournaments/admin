import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '@models';

@Component({
    selector: 'user-one-edit',
    templateUrl: 'user-one-edit.component.html',
})
export class UserOneEditComponent {
    @Input() item!: User;
    @Output() submit: EventEmitter<void> = new EventEmitter<void>();
}
