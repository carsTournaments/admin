import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Menu } from '@models';
import { MenuService } from '@services';

@Component({
    selector: 'menu-one-edit',
    templateUrl: 'menu-one-edit.component.html',
})
export class MenuOneEditComponent {
    @Input() item: Menu = new Menu();
    @Input() edit = false;
    @Output() submitItem: EventEmitter<void> = new EventEmitter();

    constructor(private menuService: MenuService) {}

    // async onSubmit() {}
}
