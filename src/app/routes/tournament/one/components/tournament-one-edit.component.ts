import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tournament } from '@models';
import { TournamentRequisiteI } from '@models/tournament.model';

@Component({
    selector: 'tournament-one-edit',
    templateUrl: 'tournament-one-edit.component.html',
})
export class TournamentOneEditComponent {
    @Input() item!: Tournament;
    @Input() disabledItems!: boolean;
    @Input() dateTime!: {
        startDate: string;
        startTime: string;
        endDate: string;
        endTime: string;
    };
    @Input() edit!: boolean;
    @Input() requisiteSelected!: string;
    @Input() requisitesDefault!: any[];
    @Output() addRequisite: EventEmitter<any> = new EventEmitter();
    @Output() deleteRequisite: EventEmitter<TournamentRequisiteI> =
        new EventEmitter();
    @Output() submit: EventEmitter<void> = new EventEmitter();
}
