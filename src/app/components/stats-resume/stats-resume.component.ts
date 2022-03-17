import { Component, OnInit } from '@angular/core';
import { StatsGetResumeDto } from 'src/app/services/stats/dtos/stats-get-all.dto';
import { StatsService } from 'src/app/services/stats/stats.service';

@Component({
    selector: 'stats-resume',
    templateUrl: 'stats-resume.component.html',
    styleUrls: ['./stats-resume.component.scss']
})

export class StatsResumeComponent implements OnInit {
    items: any[] = [];
    constructor(private statsService: StatsService) { }

    ngOnInit() {
        this.getStats();
    }

    async getStats() {
        try {
            const body: StatsGetResumeDto = { type: 'info' }
            this.statsService.getResume(body).subscribe((response) => {
                this.items = response[0].items;
            });
        } catch (error) {
            console.log(error);
        }
    }
}