import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandListPage } from './list/brand-list.page';
import { ServicesModule } from '@services/services.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrandOnePage } from './one/brand-one.page';
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
                component: BrandListPage,
                data: { breadcrumb: 'Listado', title: 'Usuarios - Listado' },
            },
            {
                path: 'one',
                component: BrandOnePage,
                data: { breadcrumb: 'Nuevo', title: 'Usuarios - Nuevo' },
            },
            {
                path: 'one/:id',
                component: BrandOnePage,
                data: { breadcrumb: 'Editar', title: 'Usuarios - Editar' },
            },
        ]),
    ],
    declarations: [BrandListPage, BrandOnePage],
    providers: [],
})
export class BrandModule {}
