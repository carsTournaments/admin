import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    selector: 'navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavBarComponent {
    search: any = {
        value: '',
        type: 'site',
        site: 'admin',
    };
    constructor(private router: Router) {}

    logout() {
        localStorage.clear();
        this.router.navigate(['/login']);
    }
}
