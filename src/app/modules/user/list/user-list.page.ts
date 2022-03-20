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
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  async getUsers() {
    try {
      this.vm.optionsTable.loading = true;
      this.userService.getAll(this.vm.userBody).subscribe((items) => {
        this.vm.optionsTable.items = items;
      });
      this.vm.optionsTable.loading = false;
    } catch (error) {
      this.vm.optionsTable.error = true;
      console.error(error);
    }
  }

  actionForOption(option: ActionForOptionI) {
    switch (option.value) {
      case 'createFakes':
        this.createFakes();
        break;
      case 'deleteFakes':
        this.deleteFakes();
        break;
      default:
        break;
    }
  }

  async createFakes() {
    const total = prompt('Ingrese la cantidad de usuarios a crear', '5');
    this.userService.createFake({ total: Number(total) }).subscribe({
      next: (response) => {
        this.getUsers();
        alert(response.message);
      },
      error: (error) => console.error(error),
    });
  }

  async deleteFakes() {
    const state = confirm('Esta seguro de eliminar todos los usuarios falsos?');
    if (state) {
      this.userService.deleteAllFake().subscribe({
        next: (response) => {
          this.getUsers();
          alert(response.message);
        },
        error: (error) => console.error(error),
      });
    }
  }
}
