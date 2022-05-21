import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageListPage } from './list/image-list.page';
import { ServicesModule } from '@services/services.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ServicesModule,
        FormsModule,
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
