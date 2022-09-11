import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { StatusPipe } from '@shared/pipes';
import { InscriptionListPage } from './inscription/inscription-list.page';
import { PairingListPage } from './pairing/pairing-list.page';
import { RoundListPage } from './round/round-list.page';
import { TournamentOneEditComponent } from './tournament/components/tournament-one-edit/tournament-one-edit.component';
import { TournamentListPage } from './tournament/pages/list/tournament-list.page';
import { TournamentOnePage } from './tournament/pages/one/tournament-one.page';
import { VoteListPage } from './vote/vote-list.page';
import { WinnerListPage } from './winner/winner-list.page';
import { TournamentOneStatusComponent } from './tournament/components/tournament-one-status/tournament-one-status.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: 'list',
                component: TournamentListPage,
                data: { breadcrumb: 'Listado', title: 'Torneos - Listado' },
            },
            {
                path: 'one',
                component: TournamentOnePage,
                data: { breadcrumb: 'Nuevo', title: 'Torneos - Nuevo' },
            },
            {
                path: 'one/:id',
                component: TournamentOnePage,
                data: { breadcrumb: 'Editar', title: 'Torneos - Editar' },
            },
            {
                path: 'inscriptions',
                component: InscriptionListPage,
                data: {
                    breadcrumb: 'Inscripciones',
                    title: 'Torneos - Inscripciones',
                },
            },
            {
                path: 'rounds',
                component: RoundListPage,
                data: { breadcrumb: 'Rondas', title: 'Torneos - Rondas' },
            },
            {
                path: 'pairings',
                component: PairingListPage,
                data: {
                    breadcrumb: 'Emparejamientos',
                    title: 'Torneos - Emparejamientos',
                },
            },
            {
                path: 'votes',
                component: VoteListPage,
                data: { breadcrumb: 'Listado', title: 'Torneos - Votos' },
            },
            {
                path: 'winners',
                component: WinnerListPage,
                data: { breadcrumb: 'Ganadores', title: 'Torneos - Ganadores' },
            },
            { path: '**', redirectTo: 'list' },
        ]),
    ],
    declarations: [
        TournamentListPage,
        TournamentOnePage,
        TournamentOneEditComponent,
        TournamentOneStatusComponent,
        InscriptionListPage,
        RoundListPage,
        PairingListPage,
        VoteListPage,
        WinnerListPage,
    ],
    providers: [StatusPipe],
})
export class TournamentsModule {}
