import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionForOptionI } from '@interfaces/action-for-option.interface';
import { Notification } from '@models/notification.model';
import {
    UserService,
    CarService,
    SnackBarService,
    NotificationService,
    AlertService,
    LikeService,
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
        private likeService: LikeService,
        private snackBarService: SnackBarService,
        private alertService: AlertService,
        private router: Router,
        private notificationService: NotificationService
    ) {}

    ngOnInit() {
        this.vm.id = this.route.snapshot.paramMap.get('id')!;
        if (this.vm.id) {
            this.vm.title = 'Editar Usuario';
            this.vm.edit = true;
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
                    this.vm.notification.fcms = [this.vm.item.fcm];
                    this.vm.notification.users = [this.vm.item._id!];
                }
                this.getCarsForUser();
                this.getLikesForUser();
            });
        } catch (error: any) {
            this.snackBarService.open(error);
        }
    }

    getCarsForUser() {
        this.vm.carsOptionsTable.loading = true;
        this.carService.getAllOfDriver({ id: this.vm.id }).subscribe({
            next: (items) => {
                this.vm.carsOptionsTable.items = items;
                this.vm.carsOptionsTable.loading = false;
            },
            error: (e) => {
                this.snackBarService.open(e);
                this.vm.carsOptionsTable.loading = false;
            },
        });
    }

    getLikesForUser() {
        this.likeService.getAllSentForUser({ id: this.vm.id }).subscribe({
            next: (items) => {
                this.vm.likesSentOptionsTable.items = items;
                this.vm.likesSentOptionsTable.loading = false;
            },
            error: (e) => {
                this.snackBarService.open(e);
                this.vm.likesSentOptionsTable.loading = false;
            },
        });
    }

    actionForOption(option: ActionForOptionI) {
        if (option.value === 'deleteUser') {
            this.deleteUser();
        }
    }

    async deleteUser() {
        const alert = await this.alertService.showConfirmation(
            'Eliminar Usuario',
            'Vas a eliminar el usuario asi como todo lo asociado a el, ¿estas seguro?'
        );
        alert.subscribe({
            next: (data) => {
                if (data) {
                    this.userService.delete(this.vm.id).subscribe({
                        next: () => {
                            this.snackBarService.open('Usuario eliminado');
                            this.router.navigate(['/users']);
                        },
                        error: (e) => this.snackBarService.open(e),
                    });
                }
            },
        });
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
