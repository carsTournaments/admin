import { TournamentService } from './../../services/tournament/tournament.service';
import { Component, OnInit } from '@angular/core';
import { DashboardViewModel } from './model/dashboard.view-model';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.page.html',
})
export class DashboardPage implements OnInit {
  vm = new DashboardViewModel();
  constructor(
    private tournamentService: TournamentService,
    private carService: CarService
  ) {}

  ngOnInit() {
    this.getTournaments();
    this.getCars();
    // this.getStats();
  }

  async getTournaments() {
    this.vm.tournamentsOptionsTable.loading = true;
    this.tournamentService.getAll(this.vm.tournamentBody).subscribe({
      next: (response) => {
        this.vm.tournamentsOptionsTable.items = response.items;
        this.vm.tournamentsOptionsTable.loading = false;
        this.vm.tournamentsOptionsTable.error = false;
      },
      error: () => {
        this.vm.tournamentsOptionsTable.loading = false;
        this.vm.tournamentsOptionsTable.error = true;
      },
    });
  }

  async getCars() {
    this.vm.carsOptionsTable.loading = true;
    this.carService.getAll(this.vm.carBody).subscribe({
      next: (response) => {
        this.vm.carsOptionsTable.items = response.items;
        this.vm.carsOptionsTable.loading = false;
        this.vm.carsOptionsTable.error = false;
      },
      error: () => {
        this.vm.carsOptionsTable.loading = false;
        this.vm.carsOptionsTable.error = true;
      },
    });
  }

  // async getStats() {
  //   try {
  //     this.vm.statsOptions.loading = true;
  //     const response = await this.statsService.getResume(this.vm.statsBody);
  //     this.vm.statsOptions.items = response;
  //     this.vm.statsOptions.loading = false;
  //     this.vm.statsOptions.error = false;
  //   } catch (error) {
  //     this.vm.statsOptions.error = true;
  //     console.error(error);
  //   }
  // }

  onChangeOrder(type: string, order: string) {
    const typeOk = type === 'tournament' ? 'tournamentBody' : 'carBody';
    if (
      !this.vm[typeOk].order ||
      this.vm[typeOk].order!.filter((item: string) => item === 'desc').length >
        0
    ) {
      this.vm[typeOk].order = [order, 'asc'];
      console.log(this.vm[typeOk].order);
      if (type === 'tournament') {
        this.getTournaments();
      } else {
        this.getCars();
      }
    } else {
      this.vm[typeOk].order = [order, 'desc'];
      console.log(this.vm[typeOk].order);

      if (type === 'tournament') {
        this.getTournaments();
      } else {
        this.getCars();
      }
    }
  }
}
