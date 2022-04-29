import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournamentListPage } from './list/tournament-list.page';
import { ServicesModule } from 'src/app/services/services.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { TournamentOnePage } from './one/tournament-one.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
    imports: [
        CommonModule,
        ServicesModule,
        ComponentsModule,
        PipesModule,
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
    declarations: [TournamentListPage, TournamentOnePage],
    providers: [],
})
export class TournamentModule {}
