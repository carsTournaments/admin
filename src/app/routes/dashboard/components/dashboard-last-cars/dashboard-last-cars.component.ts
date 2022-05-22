import { Component, Input } from '@angular/core';
import { CustomTitleWithButtonsViewModel } from '@components/custom-title-with-buttons/model/custom-title-with-buttons.view-model';
import { Car } from '@models';

@Component({
    selector: 'dashboard-last-cars',
    templateUrl: 'dashboard-last-cars.component.html',
    styleUrls: ['./dashboard-last-cars.component.scss'],
})
export class DashboardLastCarsComponent {
    @Input() items!: Car[];
    slideOpts = {
        slidesPerView: 5,
        navigation: false,
        zoom: {
            maxRatio: 5,
        },
        fadeEffect: {
            crossFade: true,
        },
    };
    optionsTitle = new CustomTitleWithButtonsViewModel({
        title: 'Ultimos Coches',
    });
    constructor() {
        this.checkIsMobile();
    }

    checkIsMobile() {
        if (window.innerWidth < 768) {
            this.slideOpts.slidesPerView = 1;
        } else {
            this.slideOpts.slidesPerView = 4;
        }
    }
}
