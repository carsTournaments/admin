import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoteListPage } from './list/vote-list.page';
import { ServicesModule } from 'src/app/services/services.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { VoteOnePage } from './one/vote-one.page';
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
        component: VoteListPage,
        data: { breadcrumb: 'Listado', title: 'Usuarios - Listado' },
      },
      {
        path: 'one',
        component: VoteOnePage,
        data: { breadcrumb: 'Nuevo', title: 'Usuarios - Nuevo' },
      },
      {
        path: 'one/:id',
        component: VoteOnePage,
        data: { breadcrumb: 'Editar', title: 'Usuarios - Editar' },
      },
    ]),
  ],
  declarations: [VoteListPage, VoteOnePage],
  providers: [],
})
export class VoteModule {}
