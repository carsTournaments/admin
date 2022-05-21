import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesModule } from '@services/services.module';
import { RouterModule } from '@angular/router';
import { LogsPage } from './logs.page';
import { NgChartsModule } from 'ng2-charts';
import { SharedModule } from '@shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ServicesModule,
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
