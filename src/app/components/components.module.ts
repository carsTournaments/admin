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
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgChartsModule } from 'ng2-charts';
import { ChartBarComponent } from './chart-bar/chart-bar.component';

@NgModule({
    imports: [
        RouterModule,
        FormsModule,
        CommonModule,
        PipesModule,
        ServicesModule,
        NgChartsModule,
        // Angular Material
        MatSnackBarModule,
        MatDialogModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatSlideToggleModule,
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
    ],
    providers: [],
})
export class ComponentsModule {}
