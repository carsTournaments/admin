import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Brand, Car, User } from '@models';

@Component({
    selector: 'car-one-edit',
    templateUrl: 'car-one-edit.component.html',
})
export class CarOneEditComponent {
    @Input() item!: Car;
    @Input() users!: User[];
    @Input() brands!: Brand[];
    @Input() stock!: boolean;
    @Input() brandIdSelected!: string;
    @Input() userIdSelected!: string;
    @Output() submit: EventEmitter<void> = new EventEmitter<void>();
}
