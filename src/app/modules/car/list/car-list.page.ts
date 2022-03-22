import { Component, OnInit } from '@angular/core';
import { ActionForOptionI } from 'src/app/interfaces/action-for-option.interface';
import { CarService } from 'src/app/services/car/car.service';
import { CarListViewModel } from './model/car-list.view-model';

@Component({
  selector: 'page-car-list',
  templateUrl: 'car-list.page.html',
})
export class CarListPage implements OnInit {
  vm = new CarListViewModel();
  constructor(private carService: CarService) {}

  ngOnInit() {
    this.getAll();
  }

  async getAll() {
    this.vm.optionsTable.loading = true;
    this.carService.getAll(this.vm.userBody).subscribe({
      next: (response) => {
        this.vm.optionsTable.items = response.items;
        this.vm.optionsTable.loading = false;
      },
      error: (error) => {
        this.vm.optionsTable.error = true;
        console.error(error);
      },
    });
  }

  actionForOption(option: ActionForOptionI) {
    switch (option.value) {
      case 'createFakes':
        this.createFakes();
        break;
      case 'deleteFakes':
        this.deleteFakes();
        break;
      default:
        break;
    }
  }

  async createFakes() {
    const total = prompt('Ingrese la cantidad de coches a crear', '5');
    this.carService.createFake({ total: Number(total) }).subscribe({
      next: (response) => {
        this.getAll();
        alert(response.message);
      },
      error: (error) => console.error(error),
    });
  }

  async deleteFakes() {
    const state = confirm('Esta seguro de eliminar todos los coches falsos?');
    if (state) {
      this.carService.deleteAllFake().subscribe({
        next: (response) => {
          this.getAll();
          alert(response.message);
        },
        error: (error) => console.error(error),
      });
    }
  }
}
