import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeListPage } from './list/like-list.page';
import { ServicesModule } from '@services/services.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
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
                component: LikeListPage,
                data: { breadcrumb: 'Listado', title: 'Likes - Listado' },
            },
        ]),
    ],
    declarations: [LikeListPage],
    providers: [],
})
export class LikeModule {}
