import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionListPage } from './list/inscription-list.page';
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
                component: InscriptionListPage,
                data: { breadcrumb: 'Listado', title: 'Usuarios - Listado' },
            },
        ]),
    ],
    declarations: [InscriptionListPage],
    providers: [],
})
export class InscriptionModule {}
