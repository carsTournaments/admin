import { Component, OnInit } from '@angular/core';
import { ActionForOptionI } from '@interfaces/action-for-option.interface';
import { AlertService, CarService, SnackBarService } from '@services';
import { CarListViewModel } from './model/car-list.view-model';
import { Router } from '@angular/router';
import { Car } from '@models';
import { PaginatorI } from '@interfaces';

@Component({
    selector: 'page-car-list',
    templateUrl: 'car-list.page.html',
})
export class CarListPage implements OnInit {
    vm = new CarListViewModel();
    constructor(
        private carService: CarService,
        private router: Router,
        private alertService: AlertService,
        private snackBarService: SnackBarService
    ) {}

    ngOnInit() {
        this.getAll();
    }

    async getAll(showMore = false) {
        this.vm.optionsTable.loading = true;
        this.carService.getAll(this.vm.carBody).subscribe({
            next: (response) => {
                this.onGetAllSuccess(showMore, response);
            },
            error: () => {
                this.vm.optionsTable.loading = false;
            },
        });
    }

    private onGetAllSuccess(
        showMore: boolean,
        response: {
            items: Car[];
            paginator: PaginatorI;
        }
    ) {
        if (!showMore) {
            this.vm.optionsTable.items = response.items;
            this.vm.optionsTable.loading = false;
            this.vm.title = `Coches (${response.paginator.total})`;
        } else {
            if (response.items.length > 0) {
                this.vm.optionsTable.items = [
                    ...this.vm.optionsTable.items,
                    ...response.items,
                ];
            } else {
                this.vm.optionsTable.showLoadMore = false;
            }
            this.vm.optionsTable.loading = false;
        }
    }

    actionForOption(option: ActionForOptionI) {
        switch (option.value) {
            case 'createFakes':
                this.createFakes();
                break;
            case 'deleteFakesWithoutPhoto':
                this.deleteFakesWithoutPhoto();
                break;
            case 'deleteFakes':
                this.deleteFakes();
                break;
            default:
                break;
        }
    }

    async createFakes() {
        const total = prompt('Ingrese la cantidad de coches a crear', '5');
        this.carService.createFake({ total: Number(total) }).subscribe({
            next: (response) => {
                this.getAll();
                this.snackBarService.open(response.message);
            },
            error: (error) => console.error(error),
        });
    }

    async deleteFakesWithoutPhoto() {
        const alert = await this.alertService.showConfirmation(
            'Eliminar coches falsos sin foto',
            'Esta seguro de eliminar todos los coches falsos sin foto?'
        );
        alert.subscribe((data) => {
            if (data) {
                this.carService.deleteAllFakeWithoutPhoto().subscribe({
                    next: (response) => {
                        this.getAll();
                        this.snackBarService.open(response.message);
                    },
                    error: (e) => this.snackBarService.open(e),
                });
            }
        });
    }

    async deleteFakes() {
        const alert = await this.alertService.showConfirmation(
            'Eliminar coches falsos',
            'Esta seguro de eliminar todos los coches falsos?'
        );
        alert.subscribe((data) => {
            if (data) {
                this.carService.deleteAllFake().subscribe({
                    next: (response) => {
                        this.getAll();
                        this.snackBarService.open(response.message);
                    },
                    error: (e) => this.snackBarService.open(e),
                });
            }
        });
    }

    onChangeOrder(order: string) {
        if (
            !this.vm.carBody.order ||
            this.vm.carBody.order.filter((item: string) => item === 'desc')
                .length > 0
        ) {
            this.vm.carBody.order = [order, 'asc'];
            this.getAll();
        } else {
            this.vm.carBody.order = [order, 'desc'];
            this.getAll();
        }
    }

    onChangePage() {
        this.vm.carBody.page += 1;
        this.getAll(true);
    }

    onRowClick(event: { rowData: Car; index: number }) {
        this.router.navigate([`/cars/one/${event.rowData._id}`]);
    }

    onCarCreated() {
        this.vm.carBody.page = 1;
        this.getAll();
    }
}
