import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'tournament-one-status',
    templateUrl: 'tournament-one-status.component.html',
})
export class tournamentOneStatusComponent implements OnInit {
    @Input() status!: string;
    constructor() {}

    ngOnInit() {}
}
