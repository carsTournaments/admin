import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesModule } from '@services/services.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NotificationListPage } from './notification-list.page';
import { SharedModule } from '@shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        ServicesModule,
        SharedModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: '',
                component: NotificationListPage,
                data: {
                    breadcrumb: 'Listado',
                    title: 'Notificaciones - Listado',
                },
            },
        ]),
    ],
    declarations: [NotificationListPage],
    providers: [],
})
export class NotificationModule {}
