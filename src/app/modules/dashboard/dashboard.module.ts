import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesModule } from 'src/app/services/services.module';
import { RouterModule } from '@angular/router';
import { DashboardPage } from './dashboard.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { DashboardResumeComponent } from './components/dashboard-resume/dashboard-resume.component';
import { DashboardLastTournamentsComponent } from './components/dashboard-last-tournaments/dashboard-last-tournaments.component';

@NgModule({
    imports: [
        CommonModule,
        ServicesModule,
        ComponentsModule,
        PipesModule,
        RouterModule.forChild([
            {
                path: '',
                component: DashboardPage,
                data: { title: 'Dashboard' },
            },
        ]),
    ],
    declarations: [
        DashboardPage,
        DashboardLastTournamentsComponent,
        DashboardResumeComponent,
    ],
    providers: [],
})
export class DashboardModule {}
