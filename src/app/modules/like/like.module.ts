import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeListPage } from './list/like-list.page';
import { ServicesModule } from 'src/app/services/services.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

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
                component: LikeListPage,
                data: { breadcrumb: 'Listado', title: 'Likes - Listado' },
            },
        ]),
    ],
    declarations: [LikeListPage],
    providers: [],
})
export class LikeModule {}
