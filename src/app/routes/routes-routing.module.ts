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
                path: 'cars',
                data: { breadcrumb: 'Coches' },
                loadChildren: () =>
                    import('./car/car.module').then((m) => m.CarModule),
            },
            {
                path: 'brands',
                data: { breadcrumb: 'Marcas' },
                loadChildren: () =>
                    import('./brand/brand.module').then((m) => m.BrandModule),
            },
            {
                path: 'images',
                data: { breadcrumb: 'Imagenes' },
                loadChildren: () =>
                    import('./image/image.module').then((m) => m.ImageModule),
            },
            {
                path: 'inscriptions',
                data: { breadcrumb: 'Inscripciones' },
                loadChildren: () =>
                    import('./inscription/inscription.module').then(
                        (m) => m.InscriptionModule
                    ),
            },
            {
                path: 'likes',
                data: { breadcrumb: 'Likes' },
                loadChildren: () =>
                    import('./like/like.module').then((m) => m.LikeModule),
            },
            {
                path: 'logs',
                data: { breadcrumb: 'Logs' },
                loadChildren: () =>
                    import('./logs/logs.module').then((m) => m.LogsModule),
            },
            {
                path: 'notifications',
                data: { breadcrumb: 'Notificaciones' },
                loadChildren: () =>
                    import('./notification/notification.module').then(
                        (m) => m.NotificationModule
                    ),
            },
            {
                path: 'pairings',
                data: { breadcrumb: 'Emparejamientos' },
                loadChildren: () =>
                    import('./pairing/pairing.module').then(
                        (m) => m.PairingModule
                    ),
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
                path: 'rounds',
                data: { breadcrumb: 'Rondas' },
                loadChildren: () =>
                    import('./round/round.module').then((m) => m.RoundModule),
            },
            {
                path: 'settings',
                data: { breadcrumb: 'Configuracion' },
                loadChildren: () =>
                    import('./settings/settings.module').then(
                        (m) => m.SettingsModule
                    ),
            },
            {
                path: 'tournaments',
                data: { breadcrumb: 'Torneos' },
                loadChildren: () =>
                    import('./tournament/tournament.module').then(
                        (m) => m.TournamentModule
                    ),
            },
            {
                path: 'users',
                data: { breadcrumb: 'Usuarios' },
                loadChildren: () =>
                    import('./user/user.module').then((m) => m.UserModule),
            },
            {
                path: 'votes',
                data: { breadcrumb: 'Votos' },
                loadChildren: () =>
                    import('./vote/vote.module').then((m) => m.VoteModule),
            },
            {
                path: 'winners',
                data: { breadcrumb: 'Ganadores' },
                loadChildren: () =>
                    import('./winner/winner.module').then(
                        (m) => m.WinnerModule
                    ),
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
