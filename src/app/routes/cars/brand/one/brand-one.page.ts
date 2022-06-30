import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionForOptionI } from '@interfaces/action-for-option.interface';
import { BrandService, CarService, SnackBarService } from '@services';
import { BrandOnePageViewModel } from './model/brand-one.view-model';

@Component({
    selector: 'page-brand-one',
    templateUrl: 'brand-one.page.html',
})
export class BrandOnePage implements OnInit {
    vm = new BrandOnePageViewModel();
    constructor(
        private route: ActivatedRoute,
        private brandService: BrandService,
        private carService: CarService,
        private router: Router,
        private snackBarService: SnackBarService
    ) {}

    ngOnInit() {
        this.vm.id = this.route.snapshot.paramMap.get('id');
        if (this.vm.id) {
            this.vm.title = 'Editar Marca';
            this.vm.edit = true;
            this.getCarsOffBrand();
            this.getOne();
        } else {
            this.vm.title = 'Nuevo Marca';
            this.vm.edit = false;
        }
    }

    async getOne() {
        this.brandService.getOne(this.vm.id).subscribe({
            next: (item) => (this.vm.item = item),
            error: (e) => console.error(e),
        });
    }

    getCarsOffBrand() {
        this.carService.getAllOffBrand({ id: this.vm.id }).subscribe({
            next: (items) => (this.vm.carsOptionsTable.items = items),
            error: (e) => console.error(e),
        });
    }

    async onSubmit() {
        try {
            this.vm.edit
                ? this.brandService.update(this.vm.item).subscribe(() => {
                      this.snackBarService.open('Marca editada correctamente');
                      this.router.navigate(['/cars/brands']);
                  })
                : this.brandService.create(this.vm.item).subscribe(() => {
                      this.snackBarService.open('Marca creada correctamente');
                      this.router.navigate(['/cars/brands']);
                  });
        } catch (error) {
            console.error(error);
        }
    }

    actionForOption(option: ActionForOptionI) {
        if (option.value === 'delete') {
            this.delete();
        }
    }

    async delete() {
        if (confirm('¿Está seguro de eliminar la marca?')) {
            this.brandService.delete(this.vm.id).subscribe({
                next: () => {
                    this.snackBarService.open('Marca eliminada');
                    this.router.navigate(['/brands']);
                },
                error: (e) => console.error(e),
            });
        }
    }
}
