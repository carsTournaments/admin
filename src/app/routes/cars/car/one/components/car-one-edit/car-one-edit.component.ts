import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand, Car, User } from '@models';
import {
    BrandService,
    CarService,
    SnackBarService,
    UserService,
} from '@services';
import { BrandGetAllDto } from '@services/api/brand/brand.dto';
import { UserGetAllDto } from '@services/api/user/dtos/user.dto';

@Component({
    selector: 'car-one-edit',
    templateUrl: 'car-one-edit.component.html',
})
export class CarOneEditComponent implements OnInit {
    @Input() item!: Car;
    @Input() edit = false;
    @Output() carCreated = new EventEmitter();
    users!: User[];
    brands!: Brand[];
    stock!: boolean;
    brandIdSelected!: string;
    userIdSelected!: string;
    bodyBrands: BrandGetAllDto = {
        page: 1,
        pageSize: 1000,
        site: 'admin',
        order: ['name', 'asc'],
        select: ['name'],
    };
    bodyUsers: UserGetAllDto = {
        page: 1,
        pageSize: 1000,
        site: 'admin',
        order: ['name', 'asc'],
    };

    constructor(
        private brandService: BrandService,
        private userService: UserService,
        private snackBarService: SnackBarService,
        private carService: CarService,
        private router: Router
    ) {}

    ngOnInit() {
        this.getAllBrands();
        this.getAllDrivers();
        setTimeout(() => {
            if (this.edit) {
                this.brandIdSelected = this.item.brand._id;
                this.userIdSelected = this.item.driver._id;
                this.stock = this.item.stock;
            } else {
                this.item = new Car();
            }
        }, 1000);
    }

    getAllBrands() {
        this.brandService.getAll(this.bodyBrands).subscribe({
            next: (result) => (this.brands = result.items),
            error: (e) => this.snackBarService.open(e),
        });
    }

    getAllDrivers() {
        this.userService.getAll(this.bodyUsers).subscribe({
            next: (result) => (this.users = result.items),
            error: (e) => this.snackBarService.open(e),
        });
    }

    async onSubmit() {
        try {
            this.item.brand = this.brandIdSelected;
            this.item.driver = this.userIdSelected;
            this.item.stock = Boolean(this.stock);
            this.edit
                ? this.carService.update(this.item).subscribe(() => {
                      this.snackBarService.open('Coche editado');
                      this.router.navigate(['/cars']);
                  })
                : this.carService.create(this.item).subscribe(() => {
                      this.snackBarService.open('Coche creado');
                      this.carCreated.emit();
                  });
        } catch (error) {
            this.snackBarService.open('Error al dar guardar el coche');
            console.error(error);
        }
    }
}
