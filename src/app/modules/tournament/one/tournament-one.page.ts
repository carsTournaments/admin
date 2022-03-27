import {
  Tournament,
  TournamentRequisiteI,
} from 'src/app/models/tournament.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionForOptionI } from 'src/app/interfaces/action-for-option.interface';
import { InscriptionService } from 'src/app/services/inscription/inscription.service';
import { RoundService } from 'src/app/services/round/round.service';
import { TournamentService } from 'src/app/services/tournament/tournament.service';
import { TournamentOnePageViewModel } from './model/tournament-one.view-model';
import { PairingService } from 'src/app/services/pairing/pairing.service';
import { VoteService } from 'src/app/services/vote/vote.service';

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
    private router: Router
  ) {}

  ngOnInit() {
    this.vm.id = this.route.snapshot.paramMap.get('id') as string;
    if (this.vm.id) {
      this.vm.optionsTitle.title = 'Editar Torneo';
      this.vm.edit = true;
      this.getInscriptionsByTournament();
      this.getRoundsByTournament();
      this.getPairingsByTournament();
      this.getVotesByTournament();
      this.getOne();
    } else {
      this.vm.optionsTitle.title = 'Nuevo Torneo';
      this.vm.edit = false;
    }
    this.getRequisitesDefault();
  }

  async getOne() {
    this.tournamentService.getOne(this.vm.id).subscribe({
      next: (item) => (this.vm.item = item),
      error: (e) => console.error(e),
    });
  }

  async getInscriptionsByTournament() {
    this.inscriptionService.getAllOfTournament({ id: this.vm.id }).subscribe({
      next: (items) => (this.vm.inscriptionsOptionsTable.items = items),
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
      this.vm.edit
        ? this.tournamentService.update(this.vm.item).subscribe(() => {
            this.router.navigate(['/tournaments']);
          })
        : this.tournamentService.create(this.vm.item).subscribe(() => {
            alert('Torneo creado');
            this.router.navigate(['/tournaments']);
          });
    } catch (error) {
      console.error(error);
    }
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

  forceNextRound() {
    const state = confirm('Esta seguro de forzar el inicio del torneo?');
    if (state) {
      this.vm.forceNextRoundBody.tournamentId = this.vm.id;
      this.roundService.forceNextRound(this.vm.forceNextRoundBody).subscribe({
        next: (response) => {
          console.log(response);
          this.getRoundsByTournament();
        },
        error: (error) => {
          console.error(error);
        },
      });
    }
  }

  forceInscriptions() {
    const state = confirm(
      'Esta seguro de rellenar las incripciones restantes?'
    );
    if (state) {
      this.inscriptionService.forceInscriptions({ id: this.vm.id }).subscribe({
        next: (response) => {
          alert(response.message);
          this.getInscriptionsByTournament();
        },
        error: (e) => console.error(e),
      });
    }
  }

  startTournament() {
    const state = confirm('Esta seguro de forzar el inicio del torneo?');
    if (state) {
      this.tournamentService.startTournament({ id: this.vm.id }).subscribe({
        next: () => {
          alert('Torneo iniciado');
          this.router.navigate(['/tournaments']);
        },
        error: (e) => alert(e),
      });
    }
  }

  deleteInscriptions() {
    const state = confirm('Esta seguro de eliminar todas las inscripciones?');
    if (state) {
      this.inscriptionService.deleteAllOfTournament(this.vm.id).subscribe({
        next: () => {
          alert('Inscripciones eliminadas');
          this.getInscriptionsByTournament();
        },
        error: (e) => alert(e),
      });
    }
  }

  deleteRounds() {
    const state = confirm('Esta seguro de eliminar todas las rondas?');
    if (state) {
      this.roundService.deleteAllOfTournament(this.vm.id).subscribe({
        next: () => {
          alert('Rondas eliminadas');
          this.getRoundsByTournament();
        },
        error: (e) => alert(e),
      });
    }
  }

  delete() {
    const state = confirm('Esta seguro de eliminar el torneo?');
    if (state) {
      this.tournamentService.delete(this.vm.id).subscribe({
        next: () => {
          alert('Torneo eliminado');
          this.router.navigate(['/tournaments']);
        },
        error: (e) => alert(e),
      });
    }
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
      alert('Requisito ya existente');
    }
  }

  deleteRequisite(item: TournamentRequisiteI): void {
    const index = this.vm.item.requisites.indexOf(item);
    this.vm.item.requisites.splice(index, 1);
  }

  onDeleteInscription(id: string) {
    if (confirm('¿Está seguro de eliminar la inscripcion?')) {
      this.inscriptionService.deleteOne(id).subscribe({
        next: () => this.getInscriptionsByTournament(),
        error: (error) => console.error(error),
      });
    }
  }
}
