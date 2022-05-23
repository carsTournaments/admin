import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@models';
import { UserService, SnackBarService } from '@services';

@Component({
    selector: 'user-one-edit',
    templateUrl: 'user-one-edit.component.html',
})
export class UserOneEditComponent {
    @Input() item!: User;

    constructor(
        private userService: UserService,
        private snackBarService: SnackBarService,
        private router: Router
    ) {}

    async onSubmit() {
        try {
            this.item._id
                ? this.userService.update(this.item).subscribe(() => {
                      this.snackBarService.open('Usuario actualizado');
                      this.router.navigate(['/users']);
                  })
                : this.userService.create(this.item).subscribe(() => {
                      this.snackBarService.open('Usuario creado');
                      this.router.navigate(['/users']);
                  });
        } catch (error: any) {
            this.snackBarService.open(
                error.message ? error.message : 'Ha ocurrido un error'
            );
        }
    }
}
