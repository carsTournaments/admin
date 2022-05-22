import { SettingsPage } from './settings/settings.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { NotificationListPage } from './notification/notification-list.page';
import { LogsPage } from './logs/logs.page';
import { NotificationSendComponent } from './notification/components/notification-send/notification-send.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: 'settings',
                component: SettingsPage,
                data: {
                    breadcrumb: 'Configuración',
                    title: 'Sistema - Configuracion',
                },
            },
            {
                path: 'logs',
                component: LogsPage,
                data: {
                    breadcrumb: 'Logs',
                    title: 'Sistema - Logs',
                },
            },
            {
                path: 'notifications',
                component: NotificationListPage,
                data: {
                    breadcrumb: 'Notificaciones Push',
                    title: 'Sistema - Notificaciones Push',
                },
            },
            { path: '**', redirectTo: 'settings' },
        ]),
    ],
    declarations: [
        SettingsPage,
        LogsPage,
        NotificationListPage,
        NotificationSendComponent,
    ],
    providers: [],
})
export class SystemModule {}
