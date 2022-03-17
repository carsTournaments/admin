import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionForOptionI } from 'src/app/interfaces/action-for-option.interface';
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
    private router: Router
  ) { }

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
      default:
        break;
    }
  }
}
