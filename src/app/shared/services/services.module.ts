import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
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
} from '.';
import { HttpInterceptorService } from '../../core/interceptors/http.interceptor';

@NgModule({
    imports: [CommonModule, HttpClientModule],
    declarations: [],
    providers: [
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
    ],
})
export class ServicesModule {}
