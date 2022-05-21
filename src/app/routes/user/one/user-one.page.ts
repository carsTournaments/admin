import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionForOptionI } from '@interfaces/action-for-option.interface';
import { Notification } from '@models/notification.model';
import {
    UserService,
    CarService,
    SnackBarService,
    NotificationService,
} from '@services';
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
        private snackBarService: SnackBarService,
        private notificationService: NotificationService
    ) {}

    ngOnInit() {
        this.vm.id = this.route.snapshot.paramMap.get('id') as string;
        if (this.vm.id) {
            this.vm.title = 'Editar Usuario';
            this.vm.edit = true;
            this.getCarsForUser();
            this.getOne();
        } else {
            this.vm.title = 'Nuevo Usuario';
            this.vm.edit = false;
        }
    }

    async getOne() {
        try {
            this.userService.getOne(this.vm.id).subscribe((item) => {
                this.vm.item = item;
                if (this.vm.item.fcm && this.vm.item.fcm.length > 0) {
                    this.vm.notification.fcms = [this.vm.item.fcm!];
                    this.vm.notification.users = [this.vm.item._id!];
                }
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

    createNotification(event: Notification) {
        this.notificationService.create(event).subscribe({
            next: () =>
                this.snackBarService.open(
                    `Notificacion enviada a ${this.vm.item.name}`
                ),
            error: (e) => this.snackBarService.open(e),
        });
    }
}
