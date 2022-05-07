import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesModule } from 'src/app/services/services.module';
import { RouterModule } from '@angular/router';
import { LogsPage } from './logs.page';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ServicesModule,
        ComponentsModule,
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
