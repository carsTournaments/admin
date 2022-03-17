import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesModule } from 'src/app/services/services.module';
import { RouterModule } from '@angular/router';
import { DashboardPage } from './dashboard.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

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
  declarations: [DashboardPage],
  providers: [],
})
export class DashboardModule {}
