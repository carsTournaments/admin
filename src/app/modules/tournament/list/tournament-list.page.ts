import { Component, OnInit } from '@angular/core';
import { ActionForOptionI } from 'src/app/interfaces/action-for-option.interface';
import { TournamentService } from 'src/app/services/tournament/tournament.service';
import { TournamentListViewModel } from './model/tournament-list.view-model';

@Component({
  selector: 'page-tournament-list',
  templateUrl: 'tournament-list.page.html',
})
export class TournamentListPage implements OnInit {
  vm = new TournamentListViewModel();
  constructor(private tournamentService: TournamentService) { }

  ngOnInit() {
    this.getUsers();
  }

  async getUsers() {
    try {
      this.vm.optionsTable.loading = true;
      this.tournamentService.getAll(
        this.vm.tournamentBody
      ).subscribe((items) => {
        this.vm.optionsTable.items = items;
      })
      this.vm.optionsTable.loading = false;
    } catch (error) {
      this.vm.optionsTable.error = true;
      console.error(error);
    }
  }

  actionForOption(option: ActionForOptionI) {
    // TODO: Implementar
    console.log(option);
  }
}
