import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Tournament } from '@models';
import { TournamentRequisiteI } from '@models/tournament.model';
import { SnackBarService, TournamentService } from '@services';

@Component({
    selector: 'tournament-one-edit',
    templateUrl: 'tournament-one-edit.component.html',
})
export class TournamentOneEditComponent {
    @Input() item: Tournament = new Tournament();
    @Input() disabledItems!: boolean;
    @Input() dateTime = {
        startDate: '',
        startTime: '',
        endDate: '',
        endTime: '',
    };
    @Input() edit = false;
    @Input() requisiteSelected!: string;
    @Input() requisitesDefault!: any[];

    constructor(
        private tournamentService: TournamentService,
        private snackBarService: SnackBarService,
        private router: Router
    ) {}

    async onSubmit() {
        try {
            this.item.startDate = `${this.dateTime.startDate} ${this.dateTime.startTime}`;
            this.item.maxParticipants = Number(this.item.maxParticipants);
            const validations = this.validations();
            if (validations.state) {
                this.edit ? this.update() : this.create();
            } else {
                this.snackBarService.open(validations.message);
            }
        } catch (error: any) {
            this.snackBarService.open(
                error?.message ? error.message : 'Ha ocurrido un error'
            );
        }
    }

    validations(): { state: boolean; message: string } {
        const data = {
            state: true,
            message: '',
        };
        if (this.item.name === '') {
            data.state = false;
            data.message = 'El nombre del torneo no puede estar vacio';
        }

        if (this.item.info === '') {
            data.state = false;
            data.message = 'La info del torneo no puede estar vacia';
        }

        return data;
    }

    update() {
        this.tournamentService.update(this.item).subscribe({
            next: () => {
                this.snackBarService.open('Torneo actualizado correctamente');
                this.router.navigate(['/tournaments']);
            },
            error: (error) =>
                this.snackBarService.open(
                    error.message ? error.message : 'Ha ocurrido un error'
                ),
        });
    }

    create() {
        this.tournamentService.create(this.item).subscribe({
            next: () => {
                this.snackBarService.open('Torneo creado correctamente');
                this.router.navigate(['/tournaments']);
            },
            error: (error) =>
                this.snackBarService.open(
                    error.message ? error.message : 'Ha ocurrido un error'
                ),
        });
    }

    addRequisite() {
        const item = this.requisitesDefault.find(
            (i) => i.name === this.requisiteSelected
        );
        const checkItem = this.item.requisites.find(
            (i) => i.name === item.name
        );
        if (!checkItem) {
            this.item.requisites.push(item);
        } else {
            this.snackBarService.open('Requisito ya agregado');
        }
    }

    deleteRequisite(item: TournamentRequisiteI): void {
        const index = this.item.requisites.indexOf(item);
        this.item.requisites.splice(index, 1);
    }
}
