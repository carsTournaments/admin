import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionForOptionI } from 'src/app/interfaces/action-for-option.interface';
import { UserService, CarService, SnackBarService } from 'src/app/services';
import { UserOnePageViewModel } from './model/user-one.view-model';

@Component({
    selector: 'page-user-one',
    templateUrl: 'user-one.page.html',
})
export class UserOnePage implements OnInit {
    vm = new UserOnePageViewModel();
    constructor(
        private route: ActivatedRoute,
        private userService: UserService,
        private carService: CarService,
        private router: Router,
        private snackBarService: SnackBarService
    ) {}

    ngOnInit() {
        this.vm.id = this.route.snapshot.paramMap.get('id') as string;
        if (this.vm.id) {
            this.vm.optionsTitle.title = 'Editar Usuario';
            this.vm.edit = true;
            this.getCarsForUser();
            this.getOne();
        } else {
            this.vm.optionsTitle.title = 'Nuevo Usuario';
            this.vm.edit = false;
        }
    }

    async getOne() {
        try {
            this.userService.getOne(this.vm.id).subscribe((item) => {
                this.vm.item = item;
            });
        } catch (error) {
            console.error(error);
        }
    }

    getCarsForUser() {
        this.carService.getAllOfDriver({ id: this.vm.id }).subscribe({
            next: (items) => (this.vm.carsOptionsTable.items = items),
            error: (e) => console.error(e),
        });
    }

    async onSubmit() {
        try {
            this.vm.edit
                ? this.userService.update(this.vm.item).subscribe(() => {
                      this.snackBarService.open('Usuario actualizado');
                      this.router.navigate(['/users']);
                  })
                : this.userService.create(this.vm.item).subscribe(() => {
                      this.snackBarService.open('Usuario creado');
                      this.router.navigate(['/users']);
                  });
        } catch (error: any) {
            this.snackBarService.open(
                error.message ? error.message : 'Ha ocurrido un error'
            );
        }
    }

    actionForOption(option: ActionForOptionI) {
        switch (option.value) {
            default:
                break;
        }
    }
}
