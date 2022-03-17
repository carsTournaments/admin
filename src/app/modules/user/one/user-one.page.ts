import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionForOptionI } from 'src/app/interfaces/action-for-option.interface';
import { UserService } from 'src/app/services/user/user.service';
import { UserOnePageViewModel } from './model/user-one.view-model';

@Component({
  selector: 'page-user-one',
  templateUrl: 'user-one.page.html',
})
export class UserOnePage implements OnInit {
  vm = new UserOnePageViewModel();
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.vm.id = this.route.snapshot.paramMap.get('id') as string;
    if (this.vm.id) {
      this.vm.optionsTitle.title = 'Editar Usuario';
      this.vm.edit = true;
      this.getOne();
    } else {
      this.vm.optionsTitle.title = 'Nuevo Usuario';
      this.vm.edit = false;
    }
  }

  async getOne() {
    try {
      this.userService.getOne(this.vm.id).subscribe((item) => {
        this.vm.item = item;
      });
    } catch (error) {
      console.error(error);
    }
  }

  async onSubmit() {
    try {
      this.vm.edit
        ? this.userService.update(this.vm.item).subscribe(() => { 
          alert('Usuario actualizado');
          this.router.navigate(['/users']);
        })
        : this.userService.create(this.vm.item).subscribe(() => { 
          alert('Usuario creado');
          this.router.navigate(['/users']);
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
