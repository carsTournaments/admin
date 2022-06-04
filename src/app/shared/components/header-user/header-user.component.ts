import { Component } from '@angular/core';
import { User } from '@shared/models';
import { UserService } from '@shared/services';

@Component({
    selector: 'header-user',
    templateUrl: 'header-user.component.html',
    styleUrls: ['./header-user.component.scss'],
})
export class HeaderUserComponent {
    user!: User;
    constructor(public userService: UserService) {}

    ngOnInit() {
        this.user = this.userService.getUser();
    }

    logout() {
        // TODO: logout
    }
}
