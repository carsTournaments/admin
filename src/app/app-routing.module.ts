import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './core/guards/check-token.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'dashboard',
    data: { breadcrumb: 'Dashboard' },
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    canActivate: [LoginGuard],
  },
  {
    path: 'cars',
    data: { breadcrumb: 'Coches' },
    loadChildren: () =>
      import('./modules/car/car.module').then((m) => m.CarModule),
    canActivate: [LoginGuard],
  },
  {
    path: 'brands',
    data: { breadcrumb: 'Marcas' },
    loadChildren: () =>
      import('./modules/brand/brand.module').then((m) => m.BrandModule),
    canActivate: [LoginGuard],
  },
  {
    path: 'images',
    data: { breadcrumb: 'Imagenes' },
    loadChildren: () =>
      import('./modules/image/image.module').then((m) => m.ImageModule),
    canActivate: [LoginGuard],
  },
  {
    path: 'inscriptions',
    data: { breadcrumb: 'Inscripciones' },
    loadChildren: () =>
      import('./modules/inscription/inscription.module').then(
        (m) => m.InscriptionModule
      ),
    canActivate: [LoginGuard],
  },
  {
    path: 'logs',
    data: { breadcrumb: 'Logs' },
    loadChildren: () =>
      import('./modules/logs/logs.module').then((m) => m.LogsModule),
    canActivate: [LoginGuard],
  },
  {
    path: 'pairings',
    data: { breadcrumb: 'Emparejamientos' },
    loadChildren: () =>
      import('./modules/pairing/pairing.module').then((m) => m.PairingModule),
    canActivate: [LoginGuard],
  },
  {
    path: 'rounds',
    data: { breadcrumb: 'Rondas' },
    loadChildren: () =>
      import('./modules/round/round.module').then((m) => m.RoundModule),
    canActivate: [LoginGuard],
  },
  {
    path: 'tournaments',
    data: { breadcrumb: 'Torneos' },
    loadChildren: () =>
      import('./modules/tournament/tournament.module').then(
        (m) => m.TournamentModule
      ),
    canActivate: [LoginGuard],
  },
  {
    path: 'users',
    data: { breadcrumb: 'Usuarios' },
    loadChildren: () =>
      import('./modules/user/user.module').then((m) => m.UserModule),
    canActivate: [LoginGuard],
  },
  {
    path: 'votes',
    data: { breadcrumb: 'Votos' },
    loadChildren: () =>
      import('./modules/vote/vote.module').then((m) => m.VoteModule),
    canActivate: [LoginGuard],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
