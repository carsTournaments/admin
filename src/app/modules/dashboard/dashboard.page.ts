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
      next: (items) => {
        this.vm.tournamentsOptionsTable.items = items;
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
      next: (items) => {
        this.vm.carsOptionsTable.items = items;
        this.vm.carsOptionsTable.loading = false;
        this.vm.carsOptionsTable.error = false;
      },
      error: () => {
        this.vm.carsOptionsTable.loading = false;
        this.vm.carsOptionsTable.error = true;
      },
    });
  }

  // async getEvents() {
  //   try {
  //     this.vm.eventsOptionsTable.loading = true;
  //     const response = await this.eventService.getAll(this.vm.eventBody);
  //     this.vm.eventsOptionsTable.items = response.items;
  //     this.vm.eventsOptionsTable.loading = false;
  //     this.vm.sitesOptionsTable.error = false;
  //   } catch (error) {
  //     this.vm.sitesOptionsTable.error = true;
  //     console.error(error);
  //   }
  // }

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

  // // onChangeOrder(type: string, order: string) {
  // //   const typeOk = type === 'site' ? 'siteBody' : 'eventBody';
  // //   if (
  // //     !this.vm[typeOk].order ||
  // //     this.vm[typeOk].order!.filter((item: string) => item === 'desc').length >
  // //       0
  // //   ) {
  // //     this.vm[typeOk].order = [order, 'asc'];
  // //     if (type === 'site') {
  // //       this.getSites();
  // //     } else {
  // //       this.getEvents();
  // //     }
  // //   } else {
  // //     this.vm[typeOk].order = [order, 'desc'];
  // //     if (type === 'site') {
  // //       this.getSites();
  // //     } else {
  // //       this.getEvents();
  // //     }
  // //   }
  // // }
}
