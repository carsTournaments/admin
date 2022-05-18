import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Notification } from 'src/app/models/notification.model';

@Component({
    selector: 'user-notifications-send',
    templateUrl: 'user-notifications-send.component.html',
})
export class UserNotificationsSendComponent {
    @Input() notification!: Notification;
    @Output() save: EventEmitter<Notification> =
        new EventEmitter<Notification>();
    constructor() {}
}
