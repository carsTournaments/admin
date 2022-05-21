import { Component, OnInit } from '@angular/core';
import { NotificationSendComponent } from '@components/notification-send/notification-send.component';
import { ActionForOptionI } from '@interfaces/action-for-option.interface';
import { Notification } from '@models/notification.model';
import { AlertService, NotificationService, SnackBarService } from '@services';
import { NotificationListViewModel } from './models/notification-list.view-model';

@Component({
    selector: 'notification-list',
    templateUrl: 'notification-list.page.html',
})
export class NotificationListPage implements OnInit {
    vm = new NotificationListViewModel();
    constructor(
        private notificationService: NotificationService,
        private alertService: AlertService,
        private snackBarService: SnackBarService
    ) {}

    ngOnInit() {
        this.getAll();
    }

    async getAll(showMore = false) {
        this.vm.optionsTable.loading = true;
        this.notificationService.getAll(this.vm.notificationBody).subscribe({
            next: (response) => {
                if (!showMore) {
                    this.vm.optionsTable.items = response.items;
                    this.vm.optionsTable.loading = false;
                    this.vm.optionsTitle.title = `Notificaciones (${response.paginator.total})`;
                } else {
                    this.vm.optionsTable.items = [
                        ...this.vm.optionsTable.items,
                        ...response.items,
                    ];
                }
            },
            error: (error) => {
                this.vm.optionsTable.error = true;
                console.error(error);
            },
        });
        this.vm.optionsTable.loading = false;
    }

    onChangeOrder(order: string) {
        if (
            !this.vm.notificationBody.order ||
            this.vm.notificationBody.order.filter(
                (item: string) => item === 'desc'
            ).length > 0
        ) {
            this.vm.notificationBody.order = [order, 'asc'];
            this.getAll();
        } else {
            this.vm.notificationBody.order = [order, 'desc'];
            this.getAll();
        }
    }

    onChangePage() {
        this.vm.notificationBody.page += 1;
        this.getAll(true);
    }

    async onClickNew(event: any) {
        if (event) {
            await this.alertService.openDialog(NotificationSendComponent);
        }
    }

    async onClickItem(notification: Notification) {
        this.alertService.showConfirmation(
            notification.title,
            notification.message,
            [{ text: 'Aceptar', role: 'ok' }]
        );
    }

    actionForOption(option: ActionForOptionI) {
        if (option.value === 'deleteAll') {
            this.notificationService.deleteAll().subscribe({
                next: () => {
                    this.getAll();
                    this.snackBarService.open(
                        'Se eliminaron todas las notificaciones'
                    );
                },
                error: (error) => this.snackBarService.open(error),
            });
        }
    }
}
