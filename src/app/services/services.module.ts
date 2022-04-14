import { TokenInterceptorService } from './../core/interceptors/token.interceptor';
import { StatsService } from 'src/app/services/stats/stats.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AuthService } from './auth/auth.service';
import { BrandService } from './brand/brand.service';
import { CarService } from './car/car.service';
import { InscriptionService } from './inscription/inscription.service';
import { LoggerService } from './logger/logger.service';
import { PairingService } from './pairing/pairing.service';
import { RoundService } from './round/round.service';
import { SearchService } from './search/search.service';
import { TournamentService } from './tournament/tournament.service';
import { UserService } from './user/user.service';
import { VoteService } from './vote/vote.service';
import { ImageService } from './image/image.service';
import { WinnerService } from './winner/winner.service';

@NgModule({
    imports: [CommonModule, HttpClientModule],
    declarations: [],
    providers: [
        AuthService,
        BrandService,
        CarService,
        ImageService,
        InscriptionService,
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
            useClass: TokenInterceptorService,
            multi: true,
        },
    ],
})
export class ServicesModule {}
