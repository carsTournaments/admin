import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Literal } from '@models';
import { LiteralService, SnackBarService } from '@services';

@Component({
    selector: 'literal-one-edit',
    templateUrl: 'literal-one-edit.component.html',
})
export class LiteralOneEditComponent {
    @Input() item: Literal = new Literal();
    @Input() edit = false;
    @Output() submitItem: EventEmitter<void> = new EventEmitter();

    constructor(
        private literalService: LiteralService,
        private snackBarService: SnackBarService,
        private router: Router
    ) {}

    async onSubmit() {
        try {
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
            data.message = 'El nombre no puede estar vacio';
        }
        if (this.item.category === '') {
            data.state = false;
            data.message = 'La categoria no puede estar vacio';
        }
        return data;
    }

    update() {
        this.literalService.update(this.item).subscribe({
            next: () => {
                this.snackBarService.open('Toggle actualizado correctamente');
                this.router.navigate(['/system/literals']);
            },
            error: (error) =>
                this.snackBarService.open(
                    error.message ? error.message : 'Ha ocurrido un error'
                ),
        });
    }

    create() {
        this.literalService.create(this.item).subscribe({
            next: () => {
                this.snackBarService.open('Literal creado correctamente');
                this.submitItem.emit();
            },
            error: (error) =>
                this.snackBarService.open(
                    error.message ? error.message : 'Ha ocurrido un error'
                ),
        });
    }
}
