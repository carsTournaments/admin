import { Component, Input } from '@angular/core';

@Component({
    selector: 'tournament-one-status',
    templateUrl: 'tournament-one-status.component.html',
})
export class tournamentOneStatusComponent {
    @Input() status!: string;
}
