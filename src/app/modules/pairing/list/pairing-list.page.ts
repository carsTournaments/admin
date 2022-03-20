import { Component, OnInit } from '@angular/core';
import { ActionForOptionI } from 'src/app/interfaces/action-for-option.interface';
import { PairingService } from 'src/app/services/pairing/pairing.service';
import { PairingListViewModel } from './model/pairing-list.view-model';

@Component({
  selector: 'page-pairing-list',
  templateUrl: 'pairing-list.page.html',
})
export class PairingListPage implements OnInit {
  vm = new PairingListViewModel();
  constructor(private pairingService: PairingService) {}

  ngOnInit() {
    this.getItems();
  }

  async getItems() {
    try {
      this.vm.optionsTable.loading = true;
      this.pairingService.getAll().subscribe((items) => {
        this.vm.optionsTable.items = items;
      });
      this.vm.optionsTable.loading = false;
    } catch (error) {
      this.vm.optionsTable.error = true;
      console.error(error);
    }
  }

  actionForOption(option: ActionForOptionI) {
    switch (option.value) {
      case 'deleteAll':
        this.deleteAll();
        break;
      default:
        break;
    }
  }

  async deleteAll() {
    try {
      if (confirm('¿Está seguro de eliminar todos los emparejamientos?')) {
        this.vm.optionsTable.loading = true;
        this.pairingService.deleteAll().subscribe({
          next: () => {
            alert('Todos los emparejamientos eliminados');
            this.getItems();
          },
          error: (error) => alert(error),
        });
        this.vm.optionsTable.loading = false;
      }
    } catch (error) {
      this.vm.optionsTable.error = true;
      console.error(error);
    }
  }
}
