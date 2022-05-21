import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoteListPage } from './list/vote-list.page';
import { ServicesModule } from '@services/services.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        ServicesModule,
        SharedModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: '',
                component: VoteListPage,
                data: { breadcrumb: 'Listado', title: 'Votos - Listado' },
            },
        ]),
    ],
    declarations: [VoteListPage],
    providers: [],
})
export class VoteModule {}
