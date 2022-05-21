import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Notification } from '@models/notification.model';

@Component({
    selector: 'user-notifications-send',
    templateUrl: 'user-notifications-send.component.html',
})
export class UserNotificationsSendComponent {
    @Input() notification!: Notification;
    link!: string;
    titleButton = 'Aceptar';
    linkType = 'internal';
    @Output() save: EventEmitter<Notification> =
        new EventEmitter<Notification>();

    setAndSave() {
        this.notification.data = {
            titleButton: this.titleButton,
        };
        if (this.link) {
            this.notification.data['link'] = this.link;
            this.notification.data['linkType'] = this.linkType;
        }
        this.save.emit(this.notification);
    }
}
