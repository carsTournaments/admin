import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListPage } from './list/user-list.page';
import { RouterModule } from '@angular/router';
import { UserOnePage } from './one/user-one.page';
import { UserNotificationsSendComponent } from './one/components/user-notifications-send.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: '',
                component: UserListPage,
                data: { breadcrumb: 'Listado', title: 'Usuarios - Listado' },
            },
            {
                path: 'one',
                component: UserOnePage,
                data: { breadcrumb: 'Nuevo', title: 'Usuarios - Nuevo' },
            },
            {
                path: 'one/:id',
                component: UserOnePage,
                data: { breadcrumb: 'Editar', title: 'Usuarios - Editar' },
            },
        ]),
    ],
    declarations: [UserListPage, UserOnePage, UserNotificationsSendComponent],
    providers: [],
})
export class UserModule {}
