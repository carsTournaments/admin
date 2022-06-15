import { MenuOneEditComponent } from './menu/components/menu-one-edit/menu-one-edit.component';
import { SettingsPage } from './settings/settings.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { NotificationListPage } from './notification/notification-list.page';
import { NotificationSendComponent } from './notification/components/notification-send/notification-send.component';
import { StatsPage } from './stats/stats.page';
import { TogglesListPage } from './toggles/pages/list/toggles-list.page';
import { TogglesOnePage } from './toggles/pages/one/toggles-one.page';
import { TogglesOneEditComponent } from './toggles/components/toggles-one-edit/toggles-one-edit.component';
import { OtaListPage } from './ota/ota-list.page';
import { MenuListPage } from './menu/pages/list/menu-list.page';
import { MenuOnePage } from './menu/pages/one/menu-one.page';

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
                path: 'notifications',
                component: NotificationListPage,
                data: {
                    breadcrumb: 'Notificaciones Push',
                    title: 'Sistema - Notificaciones Push',
                },
            },
            {
                path: 'toggles',
                data: {
                    breadcrumb: 'Toggles',
                },
                children: [
                    {
                        path: '',
                        component: TogglesListPage,
                        data: {
                            breadcrumb: 'Listado',
                            title: 'Sistema - Toggles',
                        },
                    },
                    {
                        path: 'one/:id',
                        component: TogglesOnePage,
                        data: {
                            breadcrumb: 'Editar',
                            title: 'Sistema - Toggle',
                        },
                    },
                    { path: '**', redirectTo: '' },
                ],
            },
            {
                path: 'ota',
                component: OtaListPage,
                data: {
                    breadcrumb: 'Ota',
                    title: 'Sistema - Ota',
                },
            },
            {
                path: 'menu',
                data: {
                    breadcrumb: 'Menu',
                },
                children: [
                    {
                        path: '',
                        component: MenuListPage,
                        data: {
                            breadcrumb: 'Listado',
                            title: 'Sistema - Menu',
                        },
                    },
                    {
                        path: 'one/:id',
                        component: MenuOnePage,
                        data: {
                            breadcrumb: 'Editar',
                            title: 'Sistema - Menu',
                        },
                    },
                ],
            },
            { path: '**', redirectTo: 'settings' },
        ]),
    ],
    declarations: [
        SettingsPage,
        StatsPage,
        NotificationListPage,
        NotificationSendComponent,
        MenuListPage,
        MenuOnePage,
        MenuOneEditComponent,
        TogglesListPage,
        TogglesOnePage,
        TogglesOneEditComponent,
        OtaListPage,
    ],
    providers: [],
})
export class SystemModule {}
