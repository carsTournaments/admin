import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportListPage } from './list/report-list.page';
import { ServicesModule } from '@services/services.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReportOnePage } from './one/report-one.page';
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
                component: ReportListPage,
                data: { breadcrumb: 'Listado', title: 'Usuarios - Listado' },
            },
            {
                path: 'one/:id',
                component: ReportOnePage,
                data: { breadcrumb: 'Editar', title: 'Usuarios - Editar' },
            },
        ]),
    ],
    declarations: [ReportListPage, ReportOnePage],
    providers: [],
})
export class ReportModule {}
