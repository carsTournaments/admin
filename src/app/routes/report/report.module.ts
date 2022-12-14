import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportListPage } from './list/report-list.page';
import { RouterModule } from '@angular/router';
import { ReportOnePage } from './one/report-one.page';
import { SharedModule } from '@shared/shared.module';
import { ReportOneEditComponent } from './components/report-one-edit.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
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
    declarations: [ReportListPage, ReportOnePage, ReportOneEditComponent],
    providers: [],
})
export class ReportModule {}
