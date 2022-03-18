import { TournamentService } from './../../../services/tournament/tournament.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionForOptionI } from 'src/app/interfaces/action-for-option.interface';
import { CarService } from 'src/app/services/car/car.service';
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
    private carService: CarService,
    private tournamentService: TournamentService,
    private router: Router
  ) { }

  ngOnInit() {
    this.vm.optionsTitle.title = 'Nuevo Inscripcion';
    this.vm.edit = false;
    this.getCars()
    this.getTournaments();
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

  async getCars() {
    try {
      this.carService.getAll({ page: 1, pageSize: 1000, site: 'admin' })
        .subscribe((items) => {
          this.vm.cars = items;
        })
    } catch (error) {
      console.error(error);
    }
  }

  async getTournaments() {
    try {
      this.tournamentService.getAll({ page: 1, pageSize: 1000, site: 'admin' })
        .subscribe((items) => {
          this.vm.tournaments = items;
        })
    } catch (error) {
      console.error(error);
    }
  }

  async onSubmit() {
    try {
      this.inscriptionService.create(this.vm.item).subscribe(() => {
        alert('Inscripcion creada');
        this.router.navigate(['/inscriptions']);
      });
    }
    catch (error) {
      console.error(error);
    }
  }

}
