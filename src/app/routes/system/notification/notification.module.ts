import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotificationListPage } from './notification-list.page';
import { SharedModule } from '@shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
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
