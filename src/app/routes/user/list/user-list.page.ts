import { Component, OnInit } from '@angular/core';
import { ActionForOptionI } from '@interfaces/action-for-option.interface';
import { UserService } from '@services';
import { UserListViewModel } from './model/user-list.view-model';

@Component({
    selector: 'page-user-list',
    templateUrl: 'user-list.page.html',
})
export class UserListPage implements OnInit {
    vm = new UserListViewModel();
    constructor(private userService: UserService) {}

    ngOnInit() {
        this.getAll();
    }

    async getAll(showMore = false) {
        this.vm.optionsTable.loading = true;
        this.userService.getAll(this.vm.userBody).subscribe({
            next: (response) => {
                if (!showMore) {
                    this.vm.optionsTable.items = response.items;
                    this.vm.optionsTable.loading = false;
                    this.vm.title = `Usuarios (${response.paginator.total})`;
                } else {
                    this.vm.optionsTable.items = [
                        ...this.vm.optionsTable.items,
                        ...response.items,
                    ];
                }
            },
        });
        this.vm.optionsTable.loading = false;
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
        const state = confirm(
            'Esta seguro de eliminar todos los usuarios falsos?'
        );
        if (state) {
            this.userService.deleteAllFake().subscribe({
                next: (response) => {
                    this.getAll();
                    alert(response.message);
                },
                error: (error) => console.error(error),
            });
        }
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
}
