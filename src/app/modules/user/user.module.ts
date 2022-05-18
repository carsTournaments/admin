import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListPage } from './list/user-list.page';
import { ServicesModule } from 'src/app/services/services.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { UserOnePage } from './one/user-one.page';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { UserNotificationsSendComponent } from './one/components/user-notifications-send.component';

@NgModule({
    imports: [
        CommonModule,
        ServicesModule,
        ComponentsModule,
        PipesModule,
        FormsModule,
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
