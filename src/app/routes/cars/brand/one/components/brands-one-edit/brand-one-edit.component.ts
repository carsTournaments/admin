import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Brand } from '@models';

@Component({
    selector: 'brand-one-edit',
    templateUrl: 'brand-one-edit.component.html',
})
export class BrandOneEditComponent {
    @Input() item!: Brand;
    @Output() submit: EventEmitter<void> = new EventEmitter<void>();
}
