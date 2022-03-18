import { InscriptionService } from './inscription/inscription.service';
import { CarService } from './car/car.service';
import { AuthService } from './auth/auth.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UserService } from './user/user.service';
import { GlobalHttpInterceptor } from '../core/interceptors/global-http.interceptor';
import { TournamentService } from './tournament/tournament.service';
import { BrandService } from './brand/brand.service';
import { RoundService } from './round/round.service';
import { LoggerService } from './logger/logger.service';

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
    TournamentService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalHttpInterceptor,
      multi: true,
    },
  ],
})
export class ServicesModule { }
