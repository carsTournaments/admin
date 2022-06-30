import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService, MenuService, SnackBarService } from '@services';
import { MenuOnePageViewModel } from '../../models/menu-one.view-model';

@Component({
    selector: 'menu-one',
    templateUrl: 'menu-one.page.html',
})
export class MenuOnePage implements OnInit {
    vm = new MenuOnePageViewModel();
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService,
        private snackBarService: SnackBarService,
        private menuService: MenuService
    ) {}

    ngOnInit() {
        this.vm.id = this.route.snapshot.paramMap.get('id')!;
        if (this.vm.id) {
            this.vm.edit = true;
            this.getOne();
        } else {
            this.vm.title = 'Nuevo item de menu';
            this.vm.edit = false;
        }
    }

    async getOne() {
        this.menuService.getOne(this.vm.id).subscribe({
            next: (item) => {
                this.vm.item = item;
                this.vm.title = `${item.name}`;
            },
            error: (error) => this.snackBarService.open(error),
        });
    }
}
