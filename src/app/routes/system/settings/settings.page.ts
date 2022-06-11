import { Component, OnInit } from '@angular/core';
import { SettingsService, SnackBarService } from '@services';
import { SettingsViewModel } from './model/settings.view-model';

@Component({
    selector: 'page-settings',
    templateUrl: 'settings.page.html',
})
export class SettingsPage implements OnInit {
    vm = new SettingsViewModel();
    constructor(
        private settingsService: SettingsService,
        private snackBarService: SnackBarService
    ) {}

    ngOnInit() {
        this.getSettings();
    }

    getSettings() {
        this.settingsService.getAll().subscribe({
            next: (settings) => (this.vm.settings = settings),
            error: () =>
                this.snackBarService.open('Error al obtener los settings'),
        });
    }

    save() {
        this.settingsService.update(this.vm.settings).subscribe({
            next: () => {
                this.snackBarService.open(
                    'Configuración guardada correctamente'
                );
            },
            error: () => {
                this.snackBarService.open('Error al guardar la configuración');
            },
        });
    }
}
