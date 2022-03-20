import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionForOptionI } from 'src/app/interfaces/action-for-option.interface';
import { Inscription } from 'src/app/models/inscription.model';
import { CarService } from 'src/app/services/car/car.service';
import { InscriptionService } from 'src/app/services/inscription/inscription.service';
import { CarOnePageViewModel } from './model/car-one.view-model';

@Component({
  selector: 'page-car-one',
  templateUrl: 'car-one.page.html',
})
export class CarOnePage implements OnInit {
  vm = new CarOnePageViewModel();
  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private inscriptionService: InscriptionService,
    private router: Router
  ) { }

  ngOnInit() {
    this.vm.id = this.route.snapshot.paramMap.get('id') as string;
    if (this.vm.id) {
      this.vm.optionsTitle.title = 'Editar Coche';
      this.vm.edit = true;
      this.getInscriptionsByCar();
      this.getOne();
    } else {
      this.vm.optionsTitle.title = 'Nuevo Coche';
      this.vm.edit = false;
    }
  }

  async getOne() {
    this.carService.getOne(this.vm.id).subscribe({
      next: (item) => (this.vm.item = item),
      error: (error) => console.error(error),
    });
  }

  async getInscriptionsByCar() {
    this.inscriptionService.getAllOfCar({ id: this.vm.id }).subscribe({
      next: (items) => this.getInscriptionsByTournamentOk(items),
      error: (e) => console.error(e),
    });
  }

  getInscriptionsByTournamentOk(items: Inscription[]) {
    this.vm.inscriptionsOptionsTable.loading = true;
    this.vm.inscriptionsOptionsTable.items = items;
    this.vm.inscriptionsOptionsTable.loading = false;
  }

  async onSubmit() {
    try {
      this.vm.edit
        ? this.carService.update(this.vm.item).subscribe(() => {
          this.router.navigate(['/cars']);
        })
        : this.carService.create(this.vm.item).subscribe(() => {
          alert('Coche creado');
          this.router.navigate(['/cars']);
        });
    } catch (error) {
      console.error(error);
    }
  }

  actionForOption(option: ActionForOptionI) {
    switch (option.value) {
      case 'deleteInscriptions':
        this.deleteInscriptions();
        break
      case 'delete':
        this.deleteOne();
        break;
      default:
        break;
    }
  }

  async deleteInscriptions() {
    if (confirm('¿Estás seguro de eliminar todas las inscripciones?')) {
      this.vm.inscriptionsOptionsTable.loading = true;
      this.inscriptionService
        .deleteAllOfCar(this.vm.id)
        .subscribe({
          next: () => {
            this.vm.inscriptionsOptionsTable.loading = false;
            this.vm.inscriptionsOptionsTable.items = [];
          },
          error: (e) => {
            this.vm.inscriptionsOptionsTable.loading = false;
            console.error(e);
          },
        });
    }
  }

  async deleteOne() {
    if (confirm('¿Está seguro de eliminar el coche?')) {
      this.carService.delete(this.vm.id).subscribe({
        next: () => {
          alert('Coche eliminado');
          this.router.navigate(['/cars']);
        },
        error: (e) => alert(e),
      });
    }
  }

  onInscription() {
    this.getInscriptionsByCar();
  }
}
