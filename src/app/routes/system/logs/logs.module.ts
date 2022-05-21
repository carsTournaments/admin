import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LogsPage } from './logs.page';
import { NgChartsModule } from 'ng2-charts';
import { SharedModule } from '@shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        NgChartsModule,
        RouterModule.forChild([
            {
                path: '',
                component: LogsPage,
                data: { title: 'Logs' },
            },
        ]),
    ],
    declarations: [LogsPage],
    providers: [],
})
export class LogsModule {}
