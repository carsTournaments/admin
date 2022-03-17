import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionForOptionI } from 'src/app/interfaces/action-for-option.interface';
import { InscriptionService } from 'src/app/services/inscription/inscription.service';
import { InscriptionOnePageViewModel } from './model/inscription-one.view-model';

@Component({
  selector: 'page-inscription-one',
  templateUrl: 'inscription-one.page.html',
})
export class InscriptionOnePage implements OnInit {
  vm = new InscriptionOnePageViewModel();
  constructor(
    private route: ActivatedRoute,
    private inscriptionService: InscriptionService,
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
      this.inscriptionService.getOne(this.vm.id).subscribe((item) => {
        this.vm.item = item;
      });
    } catch (error) {
      console.error(error);
    }
  }

  async onSubmit() {
    try {
      this.inscriptionService.create(this.vm.item).subscribe(() => {
        alert('Coche creado');
        this.router.navigate(['/inscriptions']);
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
