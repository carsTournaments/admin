import { Component, OnInit } from '@angular/core';
import { ActionForOptionI } from 'src/app/interfaces/action-for-option.interface';
import { UserService } from 'src/app/services/user/user.service';
import { UserListViewModel } from './model/user-list.view-model';

@Component({
  selector: 'page-user-list',
  templateUrl: 'user-list.page.html',
})
export class UserListPage implements OnInit {
  vm = new UserListViewModel();
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
