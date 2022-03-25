import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageListPage } from './list/image-list.page';
import { ServicesModule } from 'src/app/services/services.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { ImageOnePage } from './one/image-one.page';
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
        component: ImageListPage,
        data: { breadcrumb: 'Listado', title: 'Usuarios - Listado' },
      },
      {
        path: 'one',
        component: ImageOnePage,
        data: { breadcrumb: 'Nuevo', title: 'Usuarios - Nuevo' },
      },
      {
        path: 'one/:id',
        component: ImageOnePage,
        data: { breadcrumb: 'Editar', title: 'Usuarios - Editar' },
      },
    ]),
  ],
  declarations: [ImageListPage, ImageOnePage],
  providers: [],
})
export class ImageModule {}
