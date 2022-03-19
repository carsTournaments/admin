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
  ) {}

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
    try {
      this.carService.getOne(this.vm.id).subscribe((item) => {
        this.vm.item = item;
      });
    } catch (error) {
      console.error(error);
    }
  }

  async getInscriptionsByCar() {
    this.inscriptionService.getAllOfCar({ id: this.vm.id }).subscribe({
      next: (items) => this.getInscriptionsByTournamentOk(items),
      error: (e) => this.getInscriptionsByTournamentKo(e),
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
    alert(e);
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
      default:
        break;
    }
  }
}
