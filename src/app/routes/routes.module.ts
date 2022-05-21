import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RoutesRoutingModule } from './routes-routing.module';

const COMPONENTS: any[] = [DashboardComponent, LoginComponent];

@NgModule({
    imports: [SharedModule, RoutesRoutingModule],
    declarations: [...COMPONENTS],
})
export class RoutesModule {}
