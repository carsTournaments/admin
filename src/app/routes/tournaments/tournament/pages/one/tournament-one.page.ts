import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionForOptionI } from '@interfaces';
import * as moment from 'moment';
import {
    TournamentService,
    InscriptionService,
    PairingService,
    RoundService,
    VoteService,
    SnackBarService,
    WinnerService,
    ImageService,
} from '@services';
import { TournamentOnePageViewModel } from '../../models/tournament-one.view-model';
import { AlertService } from '@services/material/alert/alert.service';
import { Image, Inscription, Pairing, Tournament } from '@models';
import { VoteNewComponent } from '@components';

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
        private winnerService: WinnerService,
        private router: Router,
        private snackBarService: SnackBarService,
        private alertService: AlertService,
        private imageService: ImageService
    ) {}

    ngOnInit() {
        this.vm.id = this.route.snapshot.paramMap.get('id')!;
        if (this.vm.id) {
            this.vm.edit = true;
            this.getOne();
        } else {
            this.vm.title = 'Nuevo Torneo';
            this.vm.edit = false;
        }
        this.getRequisitesDefault();
    }

    async getOne() {
        this.tournamentService.getOne(this.vm.id).subscribe({
            next: (item) => this.getOneOnSuccess(item),
            error: (e) => this.snackBarService.open(e),
        });
    }

    private getOneOnSuccess(item: Tournament) {
        this.vm.item = item;
        this.vm.startDate = moment(item.startDate).format('YYYY-MM-DD');
        this.vm.startTime = moment(item.startDate).format('HH:mm');
        this.vm.endDate = item.endDate
            ? moment(item.endDate).format('YYYY-MM-DD')
            : '';
        this.vm.endTime = item.endDate
            ? moment(item.endDate).format('HH:mm')
            : '';
        this.vm.disabledItems =
            this.vm.item.status === 'InProgress' ||
            this.vm.item.status === 'Completed';
        this.vm.title = this.vm.item.name;
        this.vm.inscriptionsPercentage =
            (this.vm.item.inscriptions.length * 100) /
            this.vm.item.maxParticipants;
        this.setItemOptions();
        this.getInscriptionsByTournament();
        this.getAllTournamentRounds();
        this.getPairingsByTournament();
        this.getVotesByTournament();
        this.getAllWinnersForTournament();
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
        this.vm.inscriptionsOptionsTable.loading = true;
        this.inscriptionService
            .getAllTournamentInscriptions({ id: this.vm.id, site: 'admin' })
            .subscribe({
                next: (items) =>
                    (this.vm.inscriptionsOptionsTable.items = items),
                error: (e) => this.snackBarService.open(e),
            });
        this.vm.inscriptionsOptionsTable.loading = false;
    }

    async getAllTournamentRounds() {
        this.vm.roundsOptionsTable.loading = true;
        this.roundService.getAllTournamentRounds({ id: this.vm.id }).subscribe({
            next: (items) => (this.vm.roundsOptionsTable.items = items),
            error: (e) => this.snackBarService.open(e),
        });
        this.vm.roundsOptionsTable.loading = false;
    }

    async getPairingsByTournament() {
        this.vm.pairingsOptionsTable.loading = true;
        this.pairingService.getAllOfTournament({ id: this.vm.id }).subscribe({
            next: (items) => (this.vm.pairingsOptionsTable.items = items),
            error: (e) => this.snackBarService.open(e),
        });
        this.vm.pairingsOptionsTable.loading = false;
    }

    async getVotesByTournament() {
        this.vm.votesOptionsTable.loading = true;
        this.voteService
            .getAllTournamentVotes({ id: this.vm.id, limit: '20' })
            .subscribe({
                next: (items) => (this.vm.votesOptionsTable.items = items),
                error: (e) => this.snackBarService.open(e),
            });
        this.vm.votesOptionsTable.loading = false;
    }

    async getAllWinnersForTournament() {
        this.vm.winnersOptionsTable.loading = true;
        this.winnerService
            .getAllTournamentWinners({ id: this.vm.id })
            .subscribe({
                next: (items) => (this.vm.winnersOptionsTable.items = items),
                error: (e) => this.snackBarService.open(e),
            });
        this.vm.winnersOptionsTable.loading = false;
    }

    getRequisitesDefault(): void {
        this.vm.requisitesDefault = new Tournament().getRequisitesDefault();
        this.vm.requisiteSelected = this.vm.requisitesDefault[0].name;
    }

    actionForOption(option: ActionForOptionI) {
        switch (option.value) {
            case 'createFakeVotes':
                this.createFakeVotes();
                break;
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
            case 'cancelTournament':
                this.cancelTournament();
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

    createFakeVotes() {
        this.alertService
            .showPrompt('Crear votos', '¿Cuantos votos deseas crear?', 'number')
            .subscribe((response) => {
                if (response && response.value) {
                    const lastRound = this.vm.roundsOptionsTable.items.filter(
                        (item) => item.status === 'InProgress'
                    )[0];
                    this.voteService
                        .createFakeVotes({
                            total: Number(response.value),
                            round: lastRound._id,
                        })
                        .subscribe((response) => {
                            this.snackBarService.open(response.message);
                            this.getOne();
                        });
                }
            });
    }

    forceNextRound() {
        const alert = this.alertService.showConfirmation(
            'Forzar avance de ronda',
            '¿Estas seguro de forzar el avance de ronda del torneo?'
        );
        alert.subscribe((data) => {
            if (data) {
                this.vm.forceNextRoundBody.tournamentId = this.vm.id;
                this.tournamentService
                    .forceNextRound(this.vm.forceNextRoundBody)
                    .subscribe({
                        next: (response) => {
                            this.snackBarService.open(response.message);
                            this.getOne();
                        },
                        error: (error) => this.snackBarService.open(error),
                    });
            }
        });
    }

    forceInscriptions() {
        const alert = this.alertService.showConfirmation(
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

    startTournament() {
        const alert = this.alertService.showConfirmation(
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

    resetTournament() {
        const alert = this.alertService.showConfirmation(
            'Forzar reseteo de torneo',
            '¿Estas seguro de resetear el torneo? Se perderán inscripciones, rondas, emparejamientosm votos y el estado del torneo sera como Sin empezar'
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

    cancelTournament() {
        const alert = this.alertService.showConfirmation(
            'Cancelar torneo',
            '¿Estas seguro de cancelar el torneo? Se perderán rondas, emparejamientos, votos y el estado del torneo sera como Cancelado'
        );
        alert.subscribe((data) => {
            if (data) {
                this.tournamentService
                    .cancelTournament({ id: this.vm.id })
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

    deleteInscriptions() {
        const alert = this.alertService.showConfirmation(
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

    deleteRounds() {
        const alert = this.alertService.showConfirmation(
            'Eliminar rondas del torneo',
            '¿Estas seguro de eliminar todas las rondas?'
        );
        alert.subscribe((data) => {
            if (data) {
                this.roundService.deleteAllOfTournament(this.vm.id).subscribe({
                    next: () => {
                        this.snackBarService.open('Rondas eliminadas');
                        this.getAllTournamentRounds();
                    },
                    error: (e) => this.snackBarService.open(e),
                });
            }
        });
    }

    delete() {
        const alert = this.alertService.showConfirmation(
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

    onDeleteInscription(id: string) {
        const alert = this.alertService.showConfirmation(
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

    onRowClickInscription(event: { rowData: Inscription; index: number }) {
        this.onDeleteInscription(event.rowData._id!);
    }

    async onRowClickPairing(event: { rowData: Pairing; index: number }) {
        const alert = await this.alertService.openDialog(VoteNewComponent, {
            car1: event.rowData.car1,
            car2: event.rowData.car2,
            round: event.rowData.round._id,
            tournament: this.vm.id,
            pairing: event.rowData._id!,
        });
        alert.subscribe((data) => {
            if (data) {
                this.getPairingsByTournament();
            }
        });
    }

    onDeleteImage(image: Image) {
        const alert = this.alertService.showConfirmation(
            'Eliminar imagen',
            'Esta seguro de eliminar la imagen?'
        );
        alert.subscribe((data) => {
            if (data) {
                this.onDeleteImageConfirmation(image);
            }
        });
    }

    onDeleteImageConfirmation(image: Image) {
        this.imageService.deleteOne(image._id!).subscribe({
            next: () => {
                this.snackBarService.open('Imagen eliminada correctamente');
                this.getOne();
            },
            error: (e) => this.snackBarService.open(e),
        });
    }
}
