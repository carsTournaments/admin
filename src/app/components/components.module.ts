import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { CustomTitleWithButtonsComponent } from './custom-title-with-buttons/custom-title-with-buttons.component';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';
import { NavBarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { OptionsListComponent } from './options-list/options-list.component';
import { PipesModule } from '../pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { SegmentsComponent } from './segments/segments.component';
import { SelectNumberEntriesComponent } from './select-number-entries/select-number-entries.component';
import { StatsComponent } from './stats/stats.component';
import { MenuComponent } from './menu/menu.component';
import { AddInscriptionComponent } from './add-inscription/add-inscription.component';

@NgModule({
  imports: [RouterModule, FormsModule, CommonModule, PipesModule],
  declarations: [
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
  ],
  exports: [
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
  ],
  providers: [],
})
export class ComponentsModule {}
