import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@shared/models';
import { AuthService } from '@shared/services';

@Component({
    selector: 'app-user-panel',
    template: `
        <div
            class="matero-user-panel"
            fxLayout="column"
            fxLayoutAlign="center center"
        >
            <img
                class="matero-user-panel-avatar"
                src="./assets/images/avatar.png"
                alt="avatar"
                width="64"
            />
            <h4 class="matero-user-panel-name">{{ user?.name ?? 'JoseXS' }}</h4>
            <h5 class="matero-user-panel-email">
                {{ user?.email ?? 'XSkunk@gmail.com' }}
            </h5>
            <div class="matero-user-panel-icons">
                <a routerLink="/profile/overview" mat-icon-button>
                    <mat-icon class="icon-18">account_circle</mat-icon>
                </a>
                <a routerLink="/profile/settings" mat-icon-button>
                    <mat-icon class="icon-18">settings</mat-icon>
                </a>
                <a (click)="logout()" mat-icon-button>
                    <mat-icon class="icon-18">exit_to_app</mat-icon>
                </a>
            </div>
        </div>
    `,
    styleUrls: ['./user-panel.component.scss'],
})
export class UserPanelComponent implements OnInit {
    user!: User;

    constructor(private router: Router, private auth: AuthService) {}

    ngOnInit(): void {
        this.auth.user().subscribe((user: any) => (this.user = user));
    }

    logout() {
        this.auth.logout();
        this.router.navigateByUrl('/auth/login');
    }
}
