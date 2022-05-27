import { Component } from '@angular/core';
import { User } from '@shared/models';
import { AuthService } from '@shared/services';

@Component({
    selector: 'header-user',
    templateUrl: 'header-user.component.html',
    styleUrls: ['./header-user.component.scss'],
})
export class HeaderUserComponent {
    user!: User;
    constructor(private authService: AuthService) {}

    logout() {
        // TODO: logout
    }
}
