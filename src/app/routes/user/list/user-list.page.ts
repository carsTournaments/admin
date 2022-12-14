import { Component, OnInit } from '@angular/core';
import { ActionForOptionI } from '@interfaces/action-for-option.interface';
import { AlertService, SnackBarService, UserService } from '@services';
import { UserListViewModel } from './model/user-list.view-model';
import { Router } from '@angular/router';
import { User } from '@models';

@Component({
    selector: 'page-user-list',
    templateUrl: 'user-list.page.html',
})
export class UserListPage implements OnInit {
    vm = new UserListViewModel();
    constructor(
        private userService: UserService,
        private router: Router,
        private alertService: AlertService,
        private snackBarService: SnackBarService
    ) {}

    ngOnInit() {
        this.getAll();
    }

    async getAll(showMore = false) {
        this.vm.optionsTable.loading = true;
        this.userService.getAll(this.vm.userBody).subscribe({
            next: (response) => {
                if (!showMore) {
                    this.vm.optionsTable.items = response.items;
                    this.vm.title = `Usuarios (${response.paginator.total})`;
                } else {
                    this.vm.optionsTable.items = [
                        ...this.vm.optionsTable.items,
                        ...response.items,
                    ];
                }
                this.vm.optionsTable.loading = false;
            },
            error: () => (this.vm.optionsTable.loading = false),
        });
    }

    actionForOption(option: ActionForOptionI) {
        switch (option.value) {
            case 'createFakes':
                this.createFakes();
                break;
            case 'deleteFakes':
                this.deleteFakes();
                break;
            default:
                break;
        }
    }

    async createFakes() {
        const total = prompt('Ingrese la cantidad de usuarios a crear', '5');
        this.userService.createFake({ total: Number(total) }).subscribe({
            next: (response) => {
                this.getAll();
                alert(response.message);
            },
            error: (error) => console.error(error),
        });
    }

    async deleteFakes() {
        const alert = this.alertService.showConfirmation(
            'Eliminar usuarios falsos',
            'Esta seguro de eliminar todos los usuarios falsos?'
        );
        alert.subscribe((alertResult) => {
            if (alertResult) {
                this.userService.deleteAllFake().subscribe({
                    next: (response) => {
                        this.getAll();
                        this.snackBarService.open(response.message);
                    },
                    error: (error) => console.error(error),
                });
            }
        });
    }

    onChangeOrder(order: string) {
        if (
            !this.vm.userBody.order ||
            this.vm.userBody.order.filter((item: string) => item === 'desc')
                .length > 0
        ) {
            this.vm.userBody.order = [order, 'asc'];
            this.getAll();
        } else {
            this.vm.userBody.order = [order, 'desc'];
            this.getAll();
        }
    }

    onChangePage() {
        this.vm.userBody.page += 1;
        this.getAll(true);
    }

    onRowClick(event: { rowData: User; index: number }) {
        this.router.navigate([`/users/one/${event.rowData._id}`]);
    }

    onClickSearchButtonHeader() {
        this.vm.searchState = !this.vm.searchState;
    }

    onKeyUpSearch(search: string) {
        if (search === '') {
            this.vm.userBody.page = 1;
            this.getAll();
        } else {
            this.userService.search({ value: search, limit: 20 }).subscribe({
                next: (response) => {
                    this.vm.optionsTable.items = response;
                    this.vm.optionsTable.loading = false;
                },
            });
        }
    }
}
