import { Component, OnInit } from '@angular/core';
import { DashboardViewModel } from './model/dashboard.view-model';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.page.html',
})
export class DashboardPage implements OnInit {
  vm = new DashboardViewModel();
  // constructor() {}

  ngOnInit() {
    // this.getSites();
    // this.getEvents();
    // this.getStats();
  }

  // async getSites() {
  //   try {
  //     this.vm.sitesOptionsTable.loading = true;
  //     const response = await this.siteService.getAll(this.vm.siteBody);
  //     this.vm.sitesOptionsTable.items = response.items;
  //     this.vm.sitesOptionsTable.loading = false;
  //     this.vm.sitesOptionsTable.error = false;
  //   } catch (error) {
  //     this.vm.sitesOptionsTable.error = true;
  //     console.error(error);
  //   }
  // }

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
