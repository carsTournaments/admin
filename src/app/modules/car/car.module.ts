import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarListPage } from './list/car-list.page';
import { ServicesModule } from 'src/app/services/services.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { CarOnePage } from './one/car-one.page';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { CarOneEditComponent } from './one/components/car-one-edit/car-one-edit.component';

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
                component: CarListPage,
                data: { breadcrumb: 'Listado', title: 'Usuarios - Listado' },
            },
            {
                path: 'one',
                component: CarOnePage,
                data: { breadcrumb: 'Nuevo', title: 'Usuarios - Nuevo' },
            },
            {
                path: 'one/:id',
                component: CarOnePage,
                data: { breadcrumb: 'Editar', title: 'Usuarios - Editar' },
            },
        ]),
    ],
    declarations: [CarListPage, CarOnePage, CarOneEditComponent],
    providers: [],
})
export class CarModule {}
