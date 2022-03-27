import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from 'src/app/services/car/car.service';
import { InscriptionService } from 'src/app/services/inscription/inscription.service';
import { TournamentService } from 'src/app/services/tournament/tournament.service';
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
  ) {}

  ngOnInit() {
    this.vm.optionsTitle.title = 'Nuevo Inscripcion';
    this.vm.edit = false;
    this.getCars();
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
    this.carService.getAll(this.vm.carBody).subscribe({
      next: (response) => (this.vm.cars = response.items),
      error: (error) => console.error(error),
    });
  }

  async getTournaments() {
    try {
      this.tournamentService
        .getAll(this.vm.tournamentBody)
        .subscribe((response) => {
          this.vm.tournaments = response.items;
        });
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
    } catch (error) {
      console.error(error);
    }
  }
}
