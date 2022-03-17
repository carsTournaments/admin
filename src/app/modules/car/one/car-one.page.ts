import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionForOptionI } from 'src/app/interfaces/action-for-option.interface';
import { CarService } from 'src/app/services/car/car.service';
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
    private router: Router
  ) { }

  ngOnInit() {
    this.vm.id = this.route.snapshot.paramMap.get('id') as string;
    if (this.vm.id) {
      this.vm.optionsTitle.title = 'Editar Coche';
      this.vm.edit = true;
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

  async onSubmit() {
    try {
      this.vm.edit
        ? this.carService.update(this.vm.item).subscribe(() => { 
          alert('Coche actualizado');
          this.router.navigate(['/cars']);
        })
        : this.carService.create(this.vm.item).subscribe(() => { 
          alert('Coche creado');
          this.router.navigate(['/cars']);
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
