import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServicesModule } from './../services/services.module';
import { PipesModule } from '../pipes/pipes.module';

import { AddInscriptionComponent } from './add-inscription/add-inscription.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { CustomTitleWithButtonsComponent } from './custom-title-with-buttons/custom-title-with-buttons.component';
import { LoadingComponent } from './loading/loading.component';
import { MenuComponent } from './menu/menu.component';
import { NavBarComponent } from './navbar/navbar.component';
import { OptionsListComponent } from './options-list/options-list.component';
import { SearchComponent } from './search/search.component';
import { SegmentsComponent } from './segments/segments.component';
import { SelectNumberEntriesComponent } from './select-number-entries/select-number-entries.component';
import { StatsComponent } from './stats/stats.component';
import { StatsResumeComponent } from './stats-resume/stats-resume.component';
import { AddComponentComponent } from './add-image/add-image.component';

@NgModule({
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    PipesModule,
    ServicesModule,
  ],
  declarations: [
    AddComponentComponent,
    AddInscriptionComponent,
    BreadcrumbComponent,
    CustomTableComponent,
    CustomTitleWithButtonsComponent,
    LoadingComponent,
    NavBarComponent,
    OptionsListComponent,
    SearchComponent,
    MenuComponent,
    SegmentsComponent,
    SelectNumberEntriesComponent,
    StatsComponent,
    StatsResumeComponent,
  ],
  exports: [
    AddComponentComponent,
    AddInscriptionComponent,
    BreadcrumbComponent,
    CustomTableComponent,
    CustomTitleWithButtonsComponent,
    LoadingComponent,
    NavBarComponent,
    OptionsListComponent,
    SearchComponent,
    MenuComponent,
    SegmentsComponent,
    SelectNumberEntriesComponent,
    StatsComponent,
    StatsResumeComponent,
  ],
  providers: [],
})
export class ComponentsModule {}
