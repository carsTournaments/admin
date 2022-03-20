import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { GlobalHttpInterceptor } from '../core/interceptors/global-http.interceptor';

import { AuthService } from './auth/auth.service';
import { BrandService } from './brand/brand.service';
import { CarService } from './car/car.service';
import { InscriptionService } from './inscription/inscription.service';
import { LoggerService } from './logger/logger.service';
import { RoundService } from './round/round.service';
import { SearchService } from './search/search.service';
import { TournamentService } from './tournament/tournament.service';
import { UserService } from './user/user.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [],
  providers: [
    AuthService,
    BrandService,
    CarService,
    InscriptionService,
    LoggerService,
    RoundService,
    SearchService,
    TournamentService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalHttpInterceptor,
      multi: true,
    },
  ],
})
export class ServicesModule {}
