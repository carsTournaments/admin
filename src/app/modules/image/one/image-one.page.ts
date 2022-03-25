import { TournamentService } from '../../../services/tournament/tournament.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from 'src/app/services/car/car.service';
import { ImageService } from 'src/app/services/image/image.service';
import { ImageOnePageViewModel } from './model/image-one.view-model';

@Component({
  selector: 'page-image-one',
  templateUrl: 'image-one.page.html',
})
export class ImageOnePage implements OnInit {
  vm = new ImageOnePageViewModel();
  constructor(
    private route: ActivatedRoute,
    private imageService: ImageService,
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
      this.imageService.getOne(this.vm.id).subscribe((item) => {
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
      this.imageService.update(this.vm.item).subscribe(() => {
        alert('Imagen actualizada');
        this.router.navigate(['/images']);
      });
    } catch (error) {
      console.error(error);
    }
  }
}
