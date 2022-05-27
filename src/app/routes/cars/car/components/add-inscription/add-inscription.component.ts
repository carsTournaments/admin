import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import {
    InscriptionService,
    SnackBarService,
    TournamentService,
} from '@services';
import { AddInscriptionViewModel } from './add-inscription.view-model';

@Component({
    selector: 'car-one-add-inscription',
    templateUrl: 'add-inscription.component.html',
})
export class CarOneAddInscriptionComponent implements OnInit {
    @Input() carId!: string;
    @Input() driverId!: string;
    @Output() onInscription: EventEmitter<void> = new EventEmitter();
    vm = new AddInscriptionViewModel();

    constructor(
        private inscriptionService: InscriptionService,
        private tournamentsService: TournamentService,
        private snackBarService: SnackBarService
    ) {}

    ngOnInit() {
        this.getAllTournaments();
    }

    getAllTournaments() {
        this.tournamentsService.getAll(this.vm.bodyTournament).subscribe({
            next: (data) => {
                this.vm.tournaments = data.items;
                this.vm.tournaments = this.vm.tournaments.filter(
                    (tournament) => tournament.status === 'Todo'
                );
            },
            error: (err) => this.snackBarService.open(err),
        });
    }

    createInscription() {
        this.vm.bodyInscription = {
            tournament: this.vm.tournamentIdSelected,
            car: this.carId,
            driver: this.driverId,
        };
        this.inscriptionService.create(this.vm.bodyInscription).subscribe({
            next: () => {
                this.snackBarService.open('Inscripción creada');
                this.onInscription.emit();
            },
            error: (error) => this.snackBarService.open(error),
        });
    }
}
