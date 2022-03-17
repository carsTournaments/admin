import { Component, OnInit } from '@angular/core';
import { ActionForOptionI } from 'src/app/interfaces/action-for-option.interface';
import { UserService } from 'src/app/services/user/user.service';
import { CarListViewModel } from './model/car-list.view-model';

@Component({
  selector: 'page-car-list',
  templateUrl: 'car-list.page.html',
})
export class CarListPage implements OnInit {
  vm = new CarListViewModel();
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  async getUsers() {
    try {
      this.vm.optionsTable.loading = true;
      this.userService.getAll(
        this.vm.userBody
      ).subscribe((items) => {
        this.vm.optionsTable.items = items;
      })
      this.vm.optionsTable.loading = false;
    } catch (error) {
      this.vm.optionsTable.error = true;
      console.error(error);
    }
  }

  actionForOption(option: ActionForOptionI) {
    // TODO: Implementar
    console.log(option);
  }
}
