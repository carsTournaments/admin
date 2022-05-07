import {
    Tournament,
    TournamentRequisiteI,
} from 'src/app/models/tournament.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionForOptionI } from 'src/app/interfaces/action-for-option.interface';
import * as moment from 'moment';
import {
    TournamentService,
    InscriptionService,
    PairingService,
    RoundService,
    VoteService,
    SnackBarService,
} from 'src/app/services';
import { TournamentOnePageViewModel } from './model/tournament-one.view-model';
import { AlertService } from 'src/app/services/material/alert/alert.service';

@Component({
    selector: 'page-tournament-one',
    templateUrl: 'tournament-one.page.html',
})
export class TournamentOnePage implements OnInit {
    vm = new TournamentOnePageViewModel();

    constructor(
        private route: ActivatedRoute,
        private tournamentService: TournamentService,
        private inscriptionService: InscriptionService,
        private pairingService: PairingService,
        private roundService: RoundService,
        private voteService: VoteService,
        private router: Router,
        private snackBarService: SnackBarService,
        private alertService: AlertService
    ) {}

    ngOnInit() {
        this.vm.id = this.route.snapshot.paramMap.get('id') as string;
        if (this.vm.id) {
            this.vm.optionsTitle.title = 'Editar Torneo';
            this.vm.edit = true;

            this.getOne();
        } else {
            this.vm.optionsTitle.title = 'Nuevo Torneo';
            this.vm.edit = false;
        }
        this.getRequisitesDefault();
    }

    async getOne() {
        this.tournamentService.getOne(this.vm.id).subscribe({
            next: (item) => this.getOneOnSuccess(item),
            error: (e) => console.error(e),
        });
    }

    private getOneOnSuccess(item: Tournament) {
        this.vm.item = item;
        this.vm.startDate = moment(item.startDate).format('YYYY-MM-DD');
        this.vm.startTime = moment(item.startDate).format('HH:mm');
        this.vm.disabledItems =
            this.vm.item.status === 'InProgress' ||
            this.vm.item.status === 'Completed';
        this.setItemOptions();
        this.getInscriptionsByTournament();
        this.getRoundsByTournament();
        this.getPairingsByTournament();
        this.getVotesByTournament();
    }

    setItemOptions() {
        for (const i of this.vm.options) {
            i.disabled = false;
        }
        const nextRoundIndex = this.vm.options.findIndex(
            (item) => item.value === 'nextRound'
        );
        const forceInscriptionsIndex = this.vm.options.findIndex(
            (item) => item.value === 'forceInscriptions'
        );
        const startTournamentIndex = this.vm.options.findIndex(
            (item) => item.value === 'startTournament'
        );

        if (this.vm.item.status === 'Todo') {
            this.vm.options[nextRoundIndex].disabled = true;
        } else if (this.vm.item.status === 'InProgress') {
            this.vm.options[forceInscriptionsIndex].disabled = true;
            this.vm.options[startTournamentIndex].disabled = true;
        } else if (this.vm.item.status === 'Completed') {
            this.vm.options[nextRoundIndex].disabled = true;
            this.vm.options[forceInscriptionsIndex].disabled = true;
            this.vm.options[startTournamentIndex].disabled = true;
        }
    }

    async getInscriptionsByTournament() {
        this.inscriptionService
            .getAllOfTournament({ id: this.vm.id, site: 'admin' })
            .subscribe({
                next: (items) =>
                    (this.vm.inscriptionsOptionsTable.items = items),
                error: (e) => console.error(e),
            });
    }

    async getRoundsByTournament() {
        this.roundService.getAllOfTournament({ id: this.vm.id }).subscribe({
            next: (items) => (this.vm.roundsOptionsTable.items = items),
            error: (e) => console.error(e),
        });
    }

    async getPairingsByTournament() {
        this.pairingService.getAllOfTournament({ id: this.vm.id }).subscribe({
            next: (items) => (this.vm.pairingsOptionsTable.items = items),
            error: (e) => console.error(e),
        });
    }

    async getVotesByTournament() {
        this.voteService.getAllOfTournament({ id: this.vm.id }).subscribe({
            next: (items) => (this.vm.votesOptionsTable.items = items),
            error: (e) => console.error(e),
        });
    }

    getRequisitesDefault(): void {
        this.vm.requisitesDefault = new Tournament().getRequisitesDefault();
        this.vm.requisiteSelected = this.vm.requisitesDefault[0].name;
    }

    async onSubmit() {
        try {
            this.vm.item.startDate = `${this.vm.startDate} ${this.vm.startTime}`;
            this.vm.edit ? this.update() : this.create();
        } catch (error: any) {
            this.snackBarService.open(
                error.message ? error.message : 'Ha ocurrido un error'
            );
        }
    }

    update() {
        this.tournamentService.update(this.vm.item).subscribe({
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
        this.tournamentService.create(this.vm.item).subscribe({
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

    actionForOption(option: ActionForOptionI) {
        switch (option.value) {
            case 'nextRound':
                this.forceNextRound();
                break;
            case 'forceInscriptions':
                this.forceInscriptions();
                break;
            case 'startTournament':
                this.startTournament();
                break;
            case 'resetTournament':
                this.resetTournament();
                break;
            case 'deleteInscriptions':
                this.deleteInscriptions();
                break;
            case 'deleteRounds':
                this.deleteRounds();
                break;
            case 'delete':
                this.delete();
                break;
            default:
                break;
        }
    }

    async forceNextRound() {
        const alert = await this.alertService.showConfirmation(
            'Forzar avance de ronda',
            '¿Estas seguro de forzar el avance de ronda del torneo?'
        );
        alert.subscribe((data) => {
            if (data) {
                this.vm.forceNextRoundBody.tournamentId = this.vm.id;
                this.roundService
                    .forceNextRound(this.vm.forceNextRoundBody)
                    .subscribe({
                        next: (response) => {
                            this.snackBarService.open(response.message);
                            this.getOne();
                        },
                        error: (error) => {
                            this.snackBarService.open(error);
                        },
                    });
            }
        });
    }

    async forceInscriptions() {
        const alert = await this.alertService.showConfirmation(
            'Forzar inscripciones',
            '¿Estas seguro de forzar las inscripciones?'
        );
        alert.subscribe((data) => {
            if (data) {
                this.inscriptionService
                    .forceInscriptions({ id: this.vm.id })
                    .subscribe({
                        next: (response) => {
                            this.snackBarService.open(response.message);
                            this.getInscriptionsByTournament();
                        },
                        error: (e) => this.snackBarService.open(e),
                    });
            }
        });
    }

    async startTournament() {
        const alert = await this.alertService.showConfirmation(
            'Forzar inicio de torneo',
            '¿Estas seguro de forzar el inicio del torneo?'
        );
        alert.subscribe((data) => {
            if (data) {
                this.tournamentService
                    .startTournament({ id: this.vm.id })
                    .subscribe({
                        next: () => {
                            this.snackBarService.open('Torneo iniciado');
                            this.getOne();
                        },
                        error: (e) => this.snackBarService.open(e),
                    });
            }
        });
    }

    async resetTournament() {
        const alert = await this.alertService.showConfirmation(
            'Forzar reseteo de torneo',
            '¿Estas seguro de resetear el torneo?'
        );
        alert.subscribe((data) => {
            if (data) {
                this.tournamentService
                    .resetTournament({ id: this.vm.id })
                    .subscribe({
                        next: () => {
                            this.snackBarService.open('Torneo reseteado');
                            this.getOne();
                        },
                        error: (e) => this.snackBarService.open(e),
                    });
            }
        });
    }

    async deleteInscriptions() {
        const alert = await this.alertService.showConfirmation(
            'Eliminar inscripciones del torneo',
            '¿Estas seguro de eliminar todas las inscripciones?'
        );
        alert.subscribe((data) => {
            if (data) {
                this.inscriptionService
                    .deleteAllOfTournament(this.vm.id)
                    .subscribe({
                        next: () => {
                            this.snackBarService.open(
                                'Inscripciones eliminadas'
                            );
                            this.getInscriptionsByTournament();
                        },
                        error: (e) => this.snackBarService.open(e),
                    });
            }
        });
    }

    async deleteRounds() {
        const alert = await this.alertService.showConfirmation(
            'Eliminar rondas del torneo',
            '¿Estas seguro de eliminar todas las rondas?'
        );
        alert.subscribe((data) => {
            if (data) {
                this.roundService.deleteAllOfTournament(this.vm.id).subscribe({
                    next: () => {
                        this.snackBarService.open('Rondas eliminadas');
                        this.getRoundsByTournament();
                    },
                    error: (e) => this.snackBarService.open(e),
                });
            }
        });
    }

    async delete() {
        const alert = await this.alertService.showConfirmation(
            'Eliminar el torneo',
            '¿Estas seguro de eliminar el torneo?'
        );
        alert.subscribe((data) => {
            if (data) {
                this.tournamentService.delete(this.vm.id).subscribe({
                    next: () => {
                        this.snackBarService.open('Torneo eliminado');
                        this.router.navigate(['/tournaments']);
                    },
                    error: (e) => this.snackBarService.open(e),
                });
            }
        });
    }

    addRequisite() {
        const item = this.vm.requisitesDefault.find(
            (i) => i.name === this.vm.requisiteSelected
        );
        const checkItem = this.vm.item.requisites.find(
            (i) => i.name === item!.name
        );
        if (!checkItem) {
            this.vm.item.requisites.push(item!);
        } else {
            this.snackBarService.open('Requisito ya agregado');
        }
    }

    deleteRequisite(item: TournamentRequisiteI): void {
        const index = this.vm.item.requisites.indexOf(item);
        this.vm.item.requisites.splice(index, 1);
    }

    async onDeleteInscription(id: string) {
        const alert = await this.alertService.showConfirmation(
            'Eliminar inscripcion',
            '¿Está seguro de eliminar la inscripcion?'
        );
        alert.subscribe((data) => {
            if (data) {
                this.inscriptionService.deleteOne(id).subscribe({
                    next: () => this.getInscriptionsByTournament(),
                    error: (error) => console.error(error),
                });
            }
        });
    }
}
