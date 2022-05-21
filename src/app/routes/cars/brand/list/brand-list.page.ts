import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from '@models';
import { BrandService } from '@services';
import { BrandListViewModel } from './model/brand-list.view-model';

@Component({
    selector: 'page-brand-list',
    templateUrl: 'brand-list.page.html',
})
export class BrandListPage implements OnInit {
    vm = new BrandListViewModel();
    constructor(private brandService: BrandService, private router: Router) {}

    ngOnInit() {
        this.getAll();
    }

    async getAll(showMore = false) {
        this.vm.optionsTable.loading = true;
        this.brandService.getAll(this.vm.brandBody).subscribe({
            next: (response) => {
                if (!showMore) {
                    this.vm.optionsTable.items = response.items;
                    this.vm.title = `Marcas (${response.paginator.total})`;
                } else {
                    this.vm.optionsTable.items = [
                        ...this.vm.optionsTable.items,
                        ...response.items,
                    ];
                }
                this.vm.optionsTable.loading = false;
            },
            error: () => {
                this.vm.optionsTable.loading = false;
            },
        });
    }

    onChangeOrder(order: string) {
        if (
            !this.vm.brandBody.order ||
            this.vm.brandBody.order.filter((item: string) => item === 'desc')
                .length > 0
        ) {
            this.vm.brandBody.order = [order, 'asc'];
            this.getAll();
        } else {
            this.vm.brandBody.order = [order, 'desc'];
            this.getAll();
        }
    }

    onChangePage() {
        this.vm.brandBody.page += 1;
        this.getAll(true);
    }

    onRowClick(event: { rowData: Brand; index: number }) {
        this.router.navigate([`/cars/brands/one/${event.rowData._id}`]);
    }
}
