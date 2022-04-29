import { Component, OnInit } from '@angular/core';
import {
    AlertService,
    SettingsService,
    SnackBarService,
} from 'src/app/services';
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
            next: (settings) => {
                this.vm.settings = settings;
            },
            error: (err) => {},
        });
    }

    save() {
        this.settingsService.update(this.vm.settings).subscribe({
            next: (settings) => {
                this.snackBarService.open(
                    'Configuración guardada correctamente'
                );
            },
            error: (err) => {
                this.snackBarService.open('Error al guardar la configuración');
            },
        });
    }
}
