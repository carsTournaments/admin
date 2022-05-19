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
import { OptionsListComponent } from './options-list/options-list.component';
import { SearchComponent } from './search/search.component';
import { SegmentsComponent } from './segments/segments.component';
import { SelectNumberEntriesComponent } from './select-number-entries/select-number-entries.component';
import { StatsComponent } from './stats/stats.component';
import { StatsResumeComponent } from './stats-resume/stats-resume.component';
import { AddComponentComponent } from './add-image/add-image.component';
import { AlertComponent } from './alert/alert.component';
import { ToggleComponent } from './toggle/toggle.component';

import { NgChartsModule } from 'ng2-charts';
import { ChartBarComponent } from './chart-bar/chart-bar.component';
import { AngularMaterialModule } from '../modules/angular-material.module';

@NgModule({
    imports: [
        RouterModule,
        FormsModule,
        CommonModule,
        AngularMaterialModule,
        PipesModule,
        ServicesModule,
        NgChartsModule,
        // Angular Material
    ],
    declarations: [
        AddComponentComponent,
        AddInscriptionComponent,
        BreadcrumbComponent,
        ChartBarComponent,
        CustomTableComponent,
        CustomTitleWithButtonsComponent,
        LoadingComponent,
        OptionsListComponent,
        SearchComponent,
        MenuComponent,
        SegmentsComponent,
        SelectNumberEntriesComponent,
        StatsComponent,
        StatsResumeComponent,
        // Material
        AlertComponent,
        ToggleComponent,
    ],
    exports: [
        AddComponentComponent,
        AddInscriptionComponent,
        BreadcrumbComponent,
        ChartBarComponent,
        CustomTableComponent,
        CustomTitleWithButtonsComponent,
        LoadingComponent,
        OptionsListComponent,
        SearchComponent,
        MenuComponent,
        SegmentsComponent,
        SelectNumberEntriesComponent,
        StatsComponent,
        StatsResumeComponent,
        // Material
        AlertComponent,
        ToggleComponent,
        AngularMaterialModule,
    ],
    providers: [],
})
export class ComponentsModule {}
