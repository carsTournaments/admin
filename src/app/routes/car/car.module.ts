import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarListPage } from './list/car-list.page';
import { ServicesModule } from '@services/services.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CarOnePage } from './one/car-one.page';
import { CarOneEditComponent } from './one/components/car-one-edit/car-one-edit.component';
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
                component: CarListPage,
                data: { breadcrumb: 'Listado', title: 'Coches - Listado' },
            },
            {
                path: 'one',
                component: CarOnePage,
                data: { breadcrumb: 'Nuevo', title: 'Coches - Nuevo' },
            },
            {
                path: 'one/:id',
                component: CarOnePage,
                data: { breadcrumb: 'Editar', title: 'Coches - Editar' },
            },
        ]),
    ],
    declarations: [CarListPage, CarOnePage, CarOneEditComponent],
    providers: [],
})
export class CarModule {}
