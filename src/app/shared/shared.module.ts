import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { SwiperModule } from 'swiper/angular';
import { NgChartsModule } from 'ng2-charts';
import {
    AddComponentComponent,
    AddInscriptionComponent,
    AlertComponent,
    AnalyticsVisitsLastDaysComponent,
    BreadcrumbComponent,
    ChartBarComponent,
    CustomTableComponent,
    CustomTitleWithButtonsComponent,
    LoadingComponent,
    MenuComponent,
    NotificationSendComponent,
    OptionsListComponent,
    PageHeaderComponent,
    SearchComponent,
    SelectNumberEntriesComponent,
    StatsComponent,
    StatsResumeComponent,
    ToggleComponent,
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
import { DashboardLastCarsComponent } from '../routes/dashboard/components/dashboard-last-cars/dashboard-last-cars.component';
import { DashboardLastTournamentsComponent } from '../routes/dashboard/components/dashboard-last-tournaments/dashboard-last-tournaments.component';
import { DashboardResumeComponent } from '../routes/dashboard/components/dashboard-resume/dashboard-resume.component';
import {
    AlertService,
    AnalyticsService,
    AuthService,
    BrandService,
    CarService,
    ImageService,
    InscriptionService,
    LikeService,
    LoggerService,
    NotificationService,
    PairingService,
    ReportService,
    RoundService,
    SearchService,
    SettingsService,
    SnackBarService,
    StatsService,
    TournamentService,
    UserService,
    VoteService,
    WinnerService,
} from './services';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from '../core/interceptors/http.interceptor';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressHttpModule } from 'ngx-progressbar/http';
import { NgProgressRouterModule } from 'ngx-progressbar/router';

const MODULES = [
    CommonModule,
    RouterModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    SwiperModule,
    NgChartsModule,
    FlexLayoutModule,
    NgProgressModule,
    NgProgressRouterModule,
    NgProgressHttpModule,
];

const COMPONENTS = [
    AddComponentComponent,
    AddInscriptionComponent,
    AnalyticsVisitsLastDaysComponent,
    BreadcrumbComponent,
    ChartBarComponent,
    CustomTableComponent,
    CustomTitleWithButtonsComponent,
    DashboardLastCarsComponent,
    DashboardLastTournamentsComponent,
    DashboardResumeComponent,
    LoadingComponent,
    MenuComponent,
    NotificationSendComponent,
    OptionsListComponent,
    PageHeaderComponent,
    SearchComponent,
    SelectNumberEntriesComponent,
    StatsComponent,
    StatsResumeComponent,
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
    CarService,
    ImageService,
    InscriptionService,
    LikeService,
    LoggerService,
    NotificationService,
    PairingService,
    ReportService,
    RoundService,
    SearchService,
    SettingsService,
    StatsService,
    TournamentService,
    UserService,
    VoteService,
    WinnerService,
    // Material
    AlertService,
    SnackBarService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpInterceptorService,
        multi: true,
    },
];

@NgModule({
    imports: [...MODULES],
    exports: [...MODULES, ...COMPONENTS, ...PIPES],
    declarations: [...COMPONENTS, ...PIPES],
    providers: [...SERVICES],
})
export class SharedModule {}
