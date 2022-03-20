import { Round } from 'src/app/models/round.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionForOptionI } from 'src/app/interfaces/action-for-option.interface';
import { Inscription } from 'src/app/models/inscription.model';
import { InscriptionService } from 'src/app/services/inscription/inscription.service';
import { RoundService } from 'src/app/services/round/round.service';
import { TournamentService } from 'src/app/services/tournament/tournament.service';
import { TournamentOnePageViewModel } from './model/tournament-one.view-model';

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
    private roundService: RoundService,
    private router: Router
  ) { }

  ngOnInit() {
    this.vm.id = this.route.snapshot.paramMap.get('id') as string;
    if (this.vm.id) {
      this.vm.optionsTitle.title = 'Editar Torneo';
      this.vm.edit = true;
      this.getInscriptionsByTournament();
      this.getRoundsByTournament();
      this.getOne();
    } else {
      this.vm.optionsTitle.title = 'Nuevo Torneo';
      this.vm.edit = false;
    }
  }

  async getOne() {
    this.tournamentService.getOne(this.vm.id).subscribe({
      next: (item) => (this.vm.item = item),
      error: (e) => console.error(e),
    });
  }

  async getInscriptionsByTournament() {
    this.inscriptionService.getAllOfTournament({ id: this.vm.id }).subscribe({
      next: (items) => this.getInscriptionsByTournamentOk(items),
      error: (e) => console.error(e),
    });
  }

  getInscriptionsByTournamentOk(items: Inscription[]) {
    this.vm.inscriptionsOptionsTable.items = items;
  }

  async getRoundsByTournament() {
      this.roundService.getAllOfTournament({ id: this.vm.id }).subscribe({
        next: (items) => this.getRoundsByTournamentOk(items),
        error: (e) => console.error(e),
      });
    }

    getRoundsByTournamentOk(items: Round[]) {
      this.vm.roundsOptionsTable.items = items;
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

    forceInscriptions() {
      const state = confirm('Esta seguro de rellenar las incripciones restantes?');
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

    delete () {
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
  }
