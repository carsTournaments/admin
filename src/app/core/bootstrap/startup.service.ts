import { Injectable } from '@angular/core';
import { switchMap, tap } from 'rxjs/operators';
import { Menu, MenuService } from './menu.service';
import { AuthService } from '@services';

@Injectable({
    providedIn: 'root',
})
export class StartupService {
    constructor(
        private authService: AuthService,
        private menuService: MenuService // private permissonsService: NgxPermissionsService, // private rolesService: NgxRolesService
    ) {}

    /**
     * Load the application only after get the menu or other essential informations
     * such as permissions and roles.
     */
    load() {
        return new Promise<void>((resolve) => {
            this.authService
                .change()
                .pipe(
                    switchMap(() => this.authService.menu()),
                    tap((menu) => this.setMenu(menu))
                )
                .subscribe({
                    next: () => resolve(),
                    error: () => resolve(),
                });
        });
    }

    private setMenu(menu: Menu[]) {
        this.menuService.addNamespace(menu, 'menu');
        this.menuService.set(menu);
        console.log('menu', menu);
    }
}
