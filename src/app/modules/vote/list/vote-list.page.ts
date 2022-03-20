import { Component, OnInit } from '@angular/core';
import { ActionForOptionI } from 'src/app/interfaces/action-for-option.interface';
import { VoteService } from 'src/app/services/vote/vote.service';
import { VoteListViewModel } from './model/vote-list.view-model';

@Component({
  selector: 'page-vote-list',
  templateUrl: 'vote-list.page.html',
})
export class VoteListPage implements OnInit {
  vm = new VoteListViewModel();
  constructor(private voteService: VoteService) {}

  ngOnInit() {
    this.getItems();
  }

  async getItems() {
    try {
      this.vm.optionsTable.loading = true;
      this.voteService.getAll().subscribe((items) => {
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
