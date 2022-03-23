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
    this.getAll();
  }

  async getAll(showMore = false) {
    this.vm.optionsTable.loading = true;
    this.inscriptionService.getAll(this.vm.inscriptionBody).subscribe({
      next: (response) => {
        if (!showMore) {
          this.vm.optionsTable.items = response.items;
          this.vm.optionsTable.loading = false;
          this.vm.optionsTitle.title = `Inscripciones (${response.paginator.total})`;
        } else {
          this.vm.optionsTable.items = [
            ...this.vm.optionsTable.items,
            ...response.items,
          ];
        }
      },
      error: (error) => {
        this.vm.optionsTable.error = true;
        console.error(error);
      },
    });
    this.vm.optionsTable.loading = false;
  }

  actionForOption(option: ActionForOptionI) {
    // TODO: Implementar
    console.log(option);
  }

  onChangeOrder(order: string) {
    if (
      !this.vm.inscriptionBody.order ||
      this.vm.inscriptionBody.order.filter((item: string) => item === 'desc')
        .length > 0
    ) {
      this.vm.inscriptionBody.order = [order, 'asc'];
      this.getAll();
    } else {
      this.vm.inscriptionBody.order = [order, 'desc'];
      this.getAll();
    }
  }

  onChangePage() {
    this.vm.inscriptionBody.page += 1;
    this.getAll(true);
  }
}
