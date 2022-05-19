import { User } from './../../models/user.model';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Notification } from 'src/app/models/notification.model';
import {
    NotificationService,
    SnackBarService,
    UserService,
} from 'src/app/services';
import { UserGetAllDto } from 'src/app/services/api/user/dtos/user.dto';

@Component({
    selector: 'notification-send',
    templateUrl: 'notification-send.component.html',
    styleUrls: ['./notification-send.component.scss'],
})
export class NotificationSendComponent implements OnInit {
    notification = new Notification();
    link!: string;
    titleButton = 'Aceptar';
    linkType = 'internal';
    users: User[] = [];
    userSelected!: User;
    allOrUser = 'all';
    submitDisabled = false;
    linkState = false;
    @Output() save: EventEmitter<Notification> =
        new EventEmitter<Notification>();

    constructor(
        private userService: UserService,
        private notificationService: NotificationService,
        private snackBarService: SnackBarService
    ) {}

    ngOnInit() {
        this.getUsersWithFCM();
    }

    getUsersWithFCM() {
        const body: UserGetAllDto = {
            page: 0,
            pageSize: 100,
            order: ['name', 'desc'],
            site: 'admin',
            onlyFCM: true,
        };
        this.userService.getAll(body).subscribe({
            next: (response) => (this.users = response),
        });
    }

    setAndSubmit() {
        this.notification.fcms = [];
        this.notification.users = [];
        this.submitDisabled = true;
        this.notification.data = {
            titleButton: this.titleButton,
        };
        if (this.allOrUser === 'all') {
            this.users.map((item) => {
                this.notification.fcms.push(item.fcm!);
                this.notification.users.push(item._id!);
            });
        } else {
            this.notification.fcms.push(this.userSelected.fcm!);
            this.notification.users.push(this.userSelected._id!);
        }
        if (this.link) {
            this.notification.data['link'] = this.link;
            this.notification.data['linkType'] = this.linkType;
        }
        this.submit();
    }

    submit() {
        this.notificationService.create(this.notification).subscribe({
            next: () => this.snackBarService.open('Notificación enviada'),
            error: () =>
                this.snackBarService.open('Error al enviar la notificación'),
        });
        this.submitDisabled = false;
    }
}
