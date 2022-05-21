import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeModule } from './theme/theme.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { RoutesModule } from './routes/routes.module';
import { environment } from '@env/environment';
import {
    appInitializerProviders,
    BASE_URL,
    httpInterceptorProviders,
} from '@core';
import { NgxPermissionsModule } from 'ngx-permissions';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        CoreModule,
        ThemeModule,
        SharedModule,
        RoutesModule,
        FormsModule,
        NgxPermissionsModule.forRoot(),
        ToastrModule.forRoot(),
    ],
    providers: [
        { provide: BASE_URL, useValue: environment.urlApi },
        httpInterceptorProviders,
        appInitializerProviders,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
