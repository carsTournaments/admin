import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WinnerListPage } from './list/winner-list.page';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: '',
                component: WinnerListPage,
                data: { breadcrumb: 'Listado', title: 'Usuarios - Listado' },
            },
        ]),
    ],
    declarations: [WinnerListPage],
    providers: [],
})
export class WinnerModule {}
