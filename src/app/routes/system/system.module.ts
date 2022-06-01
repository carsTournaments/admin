import { SettingsPage } from './settings/settings.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { NotificationListPage } from './notification/notification-list.page';
import { LogsPage } from './logs/logs.page';
import { NotificationSendComponent } from './notification/components/notification-send/notification-send.component';
import { StatsPage } from './stats/stats.page';
import { TogglesListPage } from './toggles/pages/list/toggles-list.page';
import { TogglesOnePage } from './toggles/pages/one/toggles-one.page';
import { TogglesOneEditComponent } from './toggles/components/toggles-one-edit/toggles-one-edit.component';

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
                path: 'stats',
                component: StatsPage,
                data: {
                    breadcrumb: 'Estadisticas',
                    title: 'Sistema - Estadisticas',
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
            {
                path: 'toggles',
                component: TogglesListPage,
                data: {
                    breadcrumb: 'Toggles',
                    title: 'Sistema - Toggles',
                },
            },
            {
                path: 'toggles/one/:id',
                component: TogglesOnePage,
                data: {
                    breadcrumb: 'Toggle',
                    title: 'Sistema - Toggle',
                },
            },
            { path: '**', redirectTo: 'settings' },
        ]),
    ],
    declarations: [
        SettingsPage,
        StatsPage,
        LogsPage,
        NotificationListPage,
        NotificationSendComponent,
        TogglesListPage,
        TogglesOnePage,
        TogglesOneEditComponent,
    ],
    providers: [],
})
export class SystemModule {}
