import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageListPage } from './list/image-list.page';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: '',
                component: ImageListPage,
                data: { breadcrumb: 'Listado', title: 'Usuarios - Listado' },
            },
        ]),
    ],
    declarations: [ImageListPage],
    providers: [],
})
export class ImageModule {}
