import { Component, AfterViewInit } from '@angular/core';
import { PreloaderService } from '@core';

@Component({
    selector: 'app-root',
    template: '<router-outlet></router-outlet>',
})
export class AppComponent implements AfterViewInit {
    constructor(private preloader: PreloaderService) {}

    ngAfterViewInit() {
        this.preloader.hide();
    }
}
