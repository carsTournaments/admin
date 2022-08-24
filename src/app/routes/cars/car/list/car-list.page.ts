import { Component, OnInit, ViewChild } from '@angular/core';
import { ActionForOptionI } from '@interfaces/action-for-option.interface';
import { AlertService, CarService, SnackBarService } from '@services';
import { CarListViewModel } from './model/car-list.view-model';
import { Router } from '@angular/router';
import { Car } from '@models';
import { PaginatorI } from '@interfaces';
import { MatMenuTrigger } from '@angular/material/menu';

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
        this.getCarStats();
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

    getCarStats() {
        this.carService.getCarStats().subscribe({
            next: (response) => (this.vm.carStats = response),
            error: (error) => this.snackBarService.open(error),
        });
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

    deleteFakesWithoutPhoto() {
        const alert = this.alertService.showConfirmation(
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
        const alert = this.alertService.showConfirmation(
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

    onRowClick(event: { value: string; row: Car }) {
        const value = event.value;
        if (value === 'viewCarProfile') {
            this.router.navigate(['/cars/one/', event.row._id]);
        } else if (value === 'viewBrandProfile') {
            this.router.navigate(['/cars/brands/one/', event.row.brand._id]);
        } else if (value === 'viewDriverProfile') {
            this.router.navigate(['/users/one/', event.row.driver._id]);
        }
    }

    onCarCreated() {
        this.vm.carBody.page = 1;
        this.getAll();
    }

    onClickSearchButtonHeader() {
        this.vm.searchState = !this.vm.searchState;
    }

    onKeyUpSearch(search: string) {
        if (search === '') {
            this.vm.carBody.page = 1;
            this.getAll();
        } else {
            this.carService.search({ value: search, limit: 20 }).subscribe({
                next: (response) => {
                    this.vm.optionsTable.items = response;
                    this.vm.optionsTable.loading = false;
                },
            });
        }
    }
}
