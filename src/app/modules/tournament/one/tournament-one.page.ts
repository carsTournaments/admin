import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionForOptionI } from 'src/app/interfaces/action-for-option.interface';
import { Inscription } from 'src/app/models/inscription.model';
import { InscriptionService } from 'src/app/services/inscription/inscription.service';
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
    private router: Router
  ) { }

  ngOnInit() {
    this.vm.id = this.route.snapshot.paramMap.get('id') as string;
    if (this.vm.id) {
      this.vm.optionsTitle.title = 'Editar Torneo';
      this.vm.edit = true;
      this.getInscriptionsByTournament();
      this.getOne();
    } else {
      this.vm.optionsTitle.title = 'Nuevo Torneo';
      this.vm.edit = false;
    }
  }

  async getOne() {
    try {
      this.tournamentService.getOne(this.vm.id).subscribe((item) => {
        this.vm.item = item;
      });
    } catch (error) {
      console.error(error);
    }
  }

  async getInscriptionsByTournament() {
    this.inscriptionService.getAllOfTournament({ id: this.vm.id }).subscribe({
      next: (items) => this.getInscriptionsByTournamentOk(items),
      error: (e) => this.getInscriptionsByTournamentKo(e)
    });
  }

  getInscriptionsByTournamentOk(items: Inscription[]) {
    this.vm.inscriptionsOptionsTable.loading = true;
    this.vm.inscriptionsOptionsTable.items = items;
    if (items.length > 0) {
      this.vm.optionsSegments.segments[2] = `Inscripciones (${items.length})`;
    } else {
      delete this.vm.optionsSegments.segments[2];
    }
    this.vm.inscriptionsOptionsTable.loading = false;
  }

  getInscriptionsByTournamentKo(e: any) {
    this.vm.inscriptionsOptionsTable.error = true;
    alert(e)
  }

  async onSubmit() {
    try {
      this.vm.edit
        ? this.tournamentService.update(this.vm.item).subscribe(() => {
          alert('Torneo actualizado');
          this.router.navigate(['/tournaments']);
        })
        : this.tournamentService.create(this.vm.item).subscribe(() => {
          alert('Torneo creado');
          this.router.navigate(['/tournaments']);
        });
    }
    catch (error) {
      console.error(error);
    }
  }

  actionForOption(option: ActionForOptionI) {
    switch (option.value) {
      case 'startTournament':
        this.startTournament();
        break;
      case 'deleteInscriptions':
        this.deleteInscriptions();
        break;
      case 'delete':
        this.delete();
        break;
      default:
        break;
    }
  }

  startTournament() {
    this.tournamentService.startTournament({ id: this.vm.id }).subscribe({
      next: (v) => {
        alert('Torneo iniciado');
        this.router.navigate(['/tournaments']);
      },
      error: (e) => alert(e)
    })

  }

  deleteInscriptions() {
    this.inscriptionService.deleteAllOfTournament(this.vm.id).subscribe({
      next: () => {
        alert('Inscripciones eliminadas');
        this.getInscriptionsByTournament();
      },
      error: (e) => alert(e)
    })
  }

  delete() {
    this.tournamentService.delete(this.vm.id).subscribe({
      next: () => {
        alert('Torneo eliminado');
        this.router.navigate(['/tournaments']);
      },
      error: (e) => alert(e)
    });
  }
}
