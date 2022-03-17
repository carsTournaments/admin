import { AuthService } from './auth/auth.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UserService } from './user/user.service';
import { GlobalHttpInterceptor } from '../core/interceptors/global-http.interceptor';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [],
  providers: [
    AuthService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalHttpInterceptor,
      multi: true,
    },
  ],
})
export class ServicesModule { }
