import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
    AuthService,
    BrandService,
    CarService,
    ImageService,
    InscriptionService,
    LikeService,
    LoggerService,
    PairingService,
    RoundService,
    SearchService,
    StatsService,
    TournamentService,
    UserService,
    VoteService,
    WinnerService,
} from '.';
import { HttpInterceptorService } from '../core/interceptors/http.interceptor';

@NgModule({
    imports: [CommonModule, HttpClientModule],
    declarations: [],
    providers: [
        AuthService,
        BrandService,
        CarService,
        ImageService,
        InscriptionService,
        LikeService,
        LoggerService,
        PairingService,
        RoundService,
        SearchService,
        TournamentService,
        StatsService,
        UserService,
        VoteService,
        WinnerService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpInterceptorService,
            multi: true,
        },
    ],
})
export class ServicesModule {}
