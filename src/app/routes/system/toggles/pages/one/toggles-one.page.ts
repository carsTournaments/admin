import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionForOptionI } from '@interfaces';
import { AlertService, SnackBarService, ToggleService } from '@services';
import { TogglesOnePageViewModel } from '../../models/toggles-one.view-model';

@Component({
    selector: 'toggles-one',
    templateUrl: 'toggles-one.page.html',
})
export class TogglesOnePage {
    vm = new TogglesOnePageViewModel();

    constructor(
        private route: ActivatedRoute,
        private toggleService: ToggleService,
        private router: Router,
        private snackBarService: SnackBarService,
        private alertService: AlertService
    ) {}

    ngOnInit() {
        this.vm.id = this.route.snapshot.paramMap.get('id')!;
        if (this.vm.id) {
            this.vm.edit = true;
            this.getOne();
        } else {
            this.vm.title = 'Nuevo Toggle';
            this.vm.edit = false;
        }
    }

    async getOne() {
        this.toggleService.getOne(this.vm.id).subscribe({
            next: (item) => {
                this.vm.item = item;
                this.vm.edit = true;
                this.vm.state = this.vm.item.state ? 'true' : 'false';
            },
            error: (e) => this.snackBarService.open(e),
        });
    }

    actionForOption(option: ActionForOptionI) {
        if (option.value === 'delete') {
            this.delete();
        }
    }

    async delete() {
        const alert = await this.alertService.showConfirmation(
            'Eliminar el toggle',
            '¿Estas seguro de eliminar el toggle?'
        );
        alert.subscribe((data) => {
            if (data) {
                this.toggleService.delete(this.vm.id).subscribe({
                    next: () => {
                        this.snackBarService.open('Toggle eliminado');
                        this.router.navigate(['/system/toggles']);
                    },
                    error: (e) => this.snackBarService.open(e),
                });
            }
        });
    }
}
