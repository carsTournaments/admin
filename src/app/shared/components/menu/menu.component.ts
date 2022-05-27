import { MenuViewModel } from './menu.view-model';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'custom-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
    @Input() itemSelected = 0;
    vm = new MenuViewModel();
    constructor(private router: Router) {}

    goToAction(subitem: any) {
        if (subitem.action === 'logout') {
            localStorage.clear();
            this.router.navigate(['/']);
        }
    }
}
