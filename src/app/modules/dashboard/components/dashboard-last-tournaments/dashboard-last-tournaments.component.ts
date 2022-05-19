import { Component, Input } from '@angular/core';
import { Tournament } from 'src/app/models';

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

    onSwiper(swiper: any) {
        console.log(swiper);
    }
    onSlideChange() {
        console.log('slide change');
    }
}
