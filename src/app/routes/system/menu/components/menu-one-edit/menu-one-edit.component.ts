import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Menu } from '@models';

@Component({
    selector: 'menu-one-edit',
    templateUrl: 'menu-one-edit.component.html',
})
export class MenuOneEditComponent {
    @Input() item: Menu = new Menu();
    @Input() edit = false;
    @Output() submitItem: EventEmitter<void> = new EventEmitter();

    // constructor( menuService: MenuService) {}

    // async onSubmit() {}
}
