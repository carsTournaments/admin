import { Component, OnInit } from '@angular/core';
import { ActionForOptionI } from 'src/app/interfaces/action-for-option.interface';
import { RoundService } from 'src/app/services/round/round.service';
import { RoundListViewModel } from './model/round-list.view-model';

@Component({
  selector: 'page-round-list',
  templateUrl: 'round-list.page.html',
})
export class RoundListPage implements OnInit {
  vm = new RoundListViewModel();
  constructor(private roundService: RoundService) {}

  ngOnInit() {
    this.getItems();
  }

  async getItems() {
    try {
      this.vm.optionsTable.loading = true;
      this.roundService.getAll().subscribe((items) => {
        this.vm.optionsTable.items = items;
      });
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
