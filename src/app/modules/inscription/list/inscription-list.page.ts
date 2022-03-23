import { Component, OnInit } from '@angular/core';
import { ActionForOptionI } from 'src/app/interfaces/action-for-option.interface';
import { InscriptionService } from 'src/app/services/inscription/inscription.service';
import { InscriptionListViewModel } from './model/inscription-list.view-model';

@Component({
  selector: 'page-inscription-list',
  templateUrl: 'inscription-list.page.html',
})
export class InscriptionListPage implements OnInit {
  vm = new InscriptionListViewModel();
  constructor(private inscriptionService: InscriptionService) {}

  ngOnInit() {
    this.getUsers();
  }

  async getUsers() {
    try {
      this.vm.optionsTable.loading = true;
      this.inscriptionService.getAll(this.vm.userBody).subscribe((response) => {
        this.vm.optionsTable.items = response.items;
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
