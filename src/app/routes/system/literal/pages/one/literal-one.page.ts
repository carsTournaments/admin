import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionForOptionI } from '@interfaces';
import { AlertService, LiteralService, SnackBarService } from '@services';
import { LiteralOnePageViewModel } from '../../models/literal-one.view-model';

@Component({
    selector: 'literal-one',
    templateUrl: 'literal-one.page.html',
})
export class LiteralOnePage {
    vm = new LiteralOnePageViewModel();

    constructor(
        private route: ActivatedRoute,
        private literalService: LiteralService,
        private router: Router,
        private snackBarService: SnackBarService,
        private alertService: AlertService
    ) {}

    ngOnInit() {
        this.vm.id = this.route.snapshot.paramMap.get('id') as string;
        if (this.vm.id) {
            this.vm.edit = true;
            this.getOne();
        } else {
            this.vm.title = 'Nuevo Literal';
            this.vm.edit = false;
        }
    }

    async getOne() {
        this.literalService.getOne(this.vm.id).subscribe({
            next: (item) => {
                this.vm.item = item;
                this.vm.edit = true;
            },
            error: (e) => this.snackBarService.open(e),
        });
    }

    actionForOption(option: ActionForOptionI) {
        switch (option.value) {
            case 'delete':
                this.delete();
                break;
            default:
                break;
        }
    }

    async delete() {
        const alert = await this.alertService.showConfirmation(
            'Eliminar el literal',
            '¿Estas seguro de eliminar el literal?'
        );
        alert.subscribe((data) => {
            if (data) {
                this.literalService.delete(this.vm.id).subscribe({
                    next: () => {
                        this.snackBarService.open('Literal eliminado');
                        this.router.navigate(['/system/literals']);
                    },
                    error: (e) => this.snackBarService.open(e),
                });
            }
        });
    }
}
