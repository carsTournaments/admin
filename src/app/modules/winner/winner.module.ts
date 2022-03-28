import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WinnerListPage } from './list/winner-list.page';
import { ServicesModule } from 'src/app/services/services.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { WinnerOnePage } from './one/winner-one.page';
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
        component: WinnerListPage,
        data: { breadcrumb: 'Listado', title: 'Usuarios - Listado' },
      },
      {
        path: 'one',
        component: WinnerOnePage,
        data: { breadcrumb: 'Nuevo', title: 'Usuarios - Nuevo' },
      },
      {
        path: 'one/:id',
        component: WinnerOnePage,
        data: { breadcrumb: 'Editar', title: 'Usuarios - Editar' },
      },
    ]),
  ],
  declarations: [WinnerListPage, WinnerOnePage],
  providers: [],
})
export class WinnerModule {}
