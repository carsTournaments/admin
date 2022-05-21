import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '@core/auth';
import { AdminLayoutComponent } from '../theme/admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes = [
    {
        path: '',
        component: AdminLayoutComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            {
                path: 'tournaments',
                data: { breadcrumb: 'Torneos' },
                loadChildren: () =>
                    import('./tournaments/tournaments.module').then(
                        (m) => m.TournamentsModule
                    ),
            },
            {
                path: 'cars',
                data: { breadcrumb: 'Coches' },
                loadChildren: () =>
                    import('./cars/cars.module').then((m) => m.CarsModule),
            },
            {
                path: 'images',
                data: { breadcrumb: 'Imagenes' },
                loadChildren: () =>
                    import('./image/image.module').then((m) => m.ImageModule),
            },
            {
                path: 'reports',
                data: { breadcrumb: 'Reportes' },
                loadChildren: () =>
                    import('./report/report.module').then(
                        (m) => m.ReportModule
                    ),
            },
            {
                path: 'system',
                data: { breadcrumb: 'Configuracion' },
                loadChildren: () =>
                    import('./system/system.module').then(
                        (m) => m.SystemModule
                    ),
            },
            {
                path: 'users',
                data: { breadcrumb: 'Usuarios' },
                loadChildren: () =>
                    import('./user/user.module').then((m) => m.UserModule),
            },
        ],
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [],
    declarations: [],
    providers: [],
})
export class RoutesRoutingModule {}
