import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@models';
import { AuthService } from '@services';
import { debounceTime, tap } from 'rxjs/operators';

@Component({
    selector: 'app-user',
    template: `
        <button
            class="matero-toolbar-button matero-avatar-button"
            mat-button
            [matMenuTriggerFor]="menu"
        >
            <img
                class="matero-avatar"
                src="./assets/images/avatar.png"
                width="32"
                alt="avatar"
            />
            <span class="matero-username" fxHide.lt-sm>
                {{ user?.name }}
            </span>
        </button>

        <mat-menu #menu="matMenu">
            <button routerLink="/system/settings" mat-menu-item>
                <mat-icon>settings</mat-icon>
                <span>Configuracion</span>
            </button>
            <button mat-menu-item (click)="logout()">
                <mat-icon>exit_to_app</mat-icon>
                <span>Salir</span>
            </button>
        </mat-menu>
    `,
})
export class UserComponent implements OnInit {
    user!: User;

    constructor(
        private router: Router,
        private auth: AuthService,
        private cdr: ChangeDetectorRef
    ) {}

    ngOnInit(): void {
        this.auth
            .user()
            .pipe(
                tap((user: any) => (this.user = user)),
                debounceTime(10)
            )
            .subscribe(() => this.cdr.detectChanges());
    }

    logout() {
        this.auth.logout();
        this.router.navigateByUrl('/login');
    }
}
