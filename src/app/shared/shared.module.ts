import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { SwiperModule } from 'swiper/angular';
import { NgChartsModule } from 'ng2-charts';
import {
    AddComponentComponent,
    AlertComponent,
    AnalyticsVisitsLastDaysComponent,
    BreadcrumbComponent,
    ChartBarComponent,
    CustomTableComponent,
    CustomTableDialogComponent,
    CustomTitleWithButtonsComponent,
    ImageSelectOptionsComponent,
    LoadingComponent,
    MenuComponent,
    OptionsListComponent,
    PageHeaderComponent,
    SearchComponent,
    SelectNumberEntriesComponent,
    StatsComponent,
    StatsResumeComponent,
    ToggleComponent,
    WorldMapComponent,
    VoteNewComponent,
} from './components';
import {
    DateToTimeAgoPipe,
    ImagePipe,
    StatusPipe,
    StarsForListPipe,
    TypePipe,
    TruncateTextPipe,
} from './pipes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardLastItemsComponent } from '../routes/dashboard/components/dashboard-last-items/dashboard-last-items.component';
import { DashboardResumeComponent } from '../routes/dashboard/components/dashboard-resume/dashboard-resume.component';
import {
    AlertService,
    AnalyticsService,
    AuthService,
    BrandService,
    CacheService,
    CarService,
    GithubService,
    ImageService,
    InscriptionService,
    LikeService,
    LogService,
    NotificationService,
    OtaService,
    PairingService,
    ReportService,
    RoundService,
    SettingsService,
    SnackBarService,
    StatsService,
    TournamentService,
    UserService,
    VoteService,
    WinnerService,
} from './services';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressHttpModule } from 'ngx-progressbar/http';
import { NgProgressRouterModule } from 'ngx-progressbar/router';
import { MaterialExtensionsModule } from 'app/material-extensions.module';
import { ToastrModule } from 'ngx-toastr';
import { NgxPermissionsModule } from 'ngx-permissions';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HighchartsChartModule } from 'highcharts-angular';

const MODULES = [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    MaterialExtensionsModule,
    FlexLayoutModule,
    NgProgressModule,
    NgProgressRouterModule,
    NgProgressHttpModule,
    NgxPermissionsModule,
    HighchartsChartModule,
    ToastrModule,
    SwiperModule,
    NgChartsModule,
    NgCircleProgressModule,
];

const COMPONENTS = [
    AddComponentComponent,
    AnalyticsVisitsLastDaysComponent,
    BreadcrumbComponent,
    ChartBarComponent,
    CustomTableComponent,
    CustomTableDialogComponent,
    CustomTitleWithButtonsComponent,
    DashboardLastItemsComponent,
    DashboardResumeComponent,
    ImageSelectOptionsComponent,
    LoadingComponent,
    MenuComponent,
    OptionsListComponent,
    PageHeaderComponent,
    SearchComponent,
    SelectNumberEntriesComponent,
    StatsComponent,
    StatsResumeComponent,
    WorldMapComponent,
    VoteNewComponent,
    // Material
    AlertComponent,
    ToggleComponent,
];

const PIPES = [
    DateToTimeAgoPipe,
    ImagePipe,
    StatusPipe,
    StarsForListPipe,
    TypePipe,
    TruncateTextPipe,
];

const SERVICES = [
    AuthService,
    AnalyticsService,
    BrandService,
    CacheService,
    CarService,
    GithubService,
    ImageService,
    InscriptionService,
    LikeService,
    LogService,
    NotificationService,
    OtaService,
    PairingService,
    ReportService,
    RoundService,
    SettingsService,
    StatsService,
    TournamentService,
    UserService,
    VoteService,
    WinnerService,
    // Material
    AlertService,
    SnackBarService,
];

@NgModule({
    imports: [...MODULES],
    exports: [...MODULES, ...COMPONENTS, ...PIPES],
    declarations: [...COMPONENTS, ...PIPES],
    providers: [...SERVICES],
})
export class SharedModule {}
