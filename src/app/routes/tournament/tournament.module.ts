import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournamentListPage } from './list/tournament-list.page';
import { ServicesModule } from '@services/services.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TournamentOnePage } from './one/tournament-one.page';
import { TournamentOneEditComponent } from './one/components/tournament-one-edit.component';
import { SharedModule } from '@shared/shared.module';
import { StatusPipe } from '@shared/pipes';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ServicesModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: '',
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
        ]),
    ],
    declarations: [
        TournamentListPage,
        TournamentOnePage,
        TournamentOneEditComponent,
    ],
    providers: [StatusPipe],
})
export class TournamentModule {}
