import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '@models';
import { MenuService, SnackBarService } from '@services';
import { MenuListViewModel } from '../../models/menu-list.view-model';

@Component({
    selector: 'menu-list',
    templateUrl: 'menu-list.page.html',
})
export class MenuListPage {
    vm = new MenuListViewModel();
    constructor(
        private menuService: MenuService,
        private snackBarService: SnackBarService,
        private router: Router
    ) {}

    ngOnInit() {
        this.getAll();
    }

    async getAll() {
        this.vm.optionsTable.loading = true;
        this.menuService.getAll().subscribe({
            next: (response) => {
                this.vm.optionsTable.items = response;
                this.vm.optionsTable.loading = false;
                this.vm.title = `Menu (${response.length})`;
            },
            error: (error) => {
                this.vm.optionsTable.loading = false;
                this.snackBarService.open(error);
            },
        });
    }

    async onRowClickPairing(event: { rowData: Menu; index: number }) {
        this.router.navigate(['/system/menu/one', event.rowData._id]);
    }
}
