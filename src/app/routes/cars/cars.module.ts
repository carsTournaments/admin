import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarListPage } from './car/list/car-list.page';
import { RouterModule } from '@angular/router';
import { CarOnePage } from './car/one/car-one.page';
import { CarOneEditComponent } from './car/one/components/car-one-edit/car-one-edit.component';
import { SharedModule } from '@shared/shared.module';
import { BrandListPage } from './brand/list/brand-list.page';
import { BrandOnePage } from './brand/one/brand-one.page';
import { LikeListPage } from './like/like-list.page';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: 'list',
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
            {
                path: 'brands',
                component: BrandListPage,
                data: {
                    breadcrumb: 'Listado',
                    title: 'Coches - Marcas - Listado',
                },
            },
            {
                path: 'brands/one',
                component: BrandOnePage,
                data: { breadcrumb: 'Nuevo', title: 'Coches - Marcas - Nuevo' },
            },
            {
                path: 'brands/one/:id',
                component: BrandOnePage,
                data: {
                    breadcrumb: 'Editar',
                    title: 'Coches - Marcas - Editar',
                },
            },
            {
                path: 'likes',
                component: LikeListPage,
                data: { breadcrumb: 'Likes', title: 'Coches - Likes' },
            },
            { path: '**', redirectTo: 'list' },
        ]),
    ],
    declarations: [
        CarListPage,
        CarOnePage,
        CarOneEditComponent,
        BrandListPage,
        BrandOnePage,
        LikeListPage,
    ],
    providers: [],
})
export class CarsModule {}
