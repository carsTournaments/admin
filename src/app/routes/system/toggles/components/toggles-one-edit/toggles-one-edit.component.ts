import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Toggle } from '@models';
import { SnackBarService, ToggleService } from '@services';

@Component({
    selector: 'toggles-one-edit',
    templateUrl: 'toggles-one-edit.component.html',
})
export class TogglesOneEditComponent {
    @Input() item: Toggle = new Toggle();
    @Input() edit = false;
    @Input() state = 'false';

    constructor(
        private toggleService: ToggleService,
        private snackBarService: SnackBarService,
        private router: Router
    ) {}

    async onSubmit() {
        try {
            this.item.state = this.state === 'true' ? true : false;
            const validations = this.validations();
            if (validations.state) {
                this.edit ? this.update() : this.create();
            } else {
                this.snackBarService.open(validations.message);
            }
        } catch (error: any) {
            this.snackBarService.open(
                error?.message ? error.message : 'Ha ocurrido un error'
            );
        }
    }

    validations(): { state: boolean; message: string } {
        const data = {
            state: true,
            message: '',
        };
        if (this.item.name === '') {
            data.state = false;
            data.message = 'El nombre del torneo no puede estar vacio';
        }

        return data;
    }

    update() {
        this.toggleService.update(this.item).subscribe({
            next: () => {
                this.snackBarService.open('Torneo actualizado correctamente');
                this.router.navigate(['/system/toggles']);
            },
            error: (error) =>
                this.snackBarService.open(
                    error.message ? error.message : 'Ha ocurrido un error'
                ),
        });
    }

    create() {
        this.toggleService.create(this.item).subscribe({
            next: () => {
                this.snackBarService.open('Torneo creado correctamente');
                this.router.navigate(['/system/toggles']);
            },
            error: (error) =>
                this.snackBarService.open(
                    error.message ? error.message : 'Ha ocurrido un error'
                ),
        });
    }
}
