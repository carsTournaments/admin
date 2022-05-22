import { Component, Input } from '@angular/core';
import { CustomTitleWithButtonsViewModel } from '@components/custom-title-with-buttons/model/custom-title-with-buttons.view-model';
import { Tournament } from '@models';

@Component({
    selector: 'dashboard-last-tournaments',
    templateUrl: 'dashboard-last-tournaments.component.html',
    styleUrls: ['./dashboard-last-tournaments.component.scss'],
})
export class DashboardLastTournamentsComponent {
    @Input() items!: Tournament[];
    slideOpts = {
        slidesPerView: 3,
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
            this.slideOpts.slidesPerView = 3;
        }
    }
}
