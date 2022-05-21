import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionListPage } from './list/inscription-list.page';
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
                component: InscriptionListPage,
                data: { breadcrumb: 'Listado', title: 'Usuarios - Listado' },
            },
        ]),
    ],
    declarations: [InscriptionListPage],
    providers: [],
})
export class InscriptionModule {}
