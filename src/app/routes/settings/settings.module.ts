import { SettingsPage } from './settings.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesModule } from '@services/services.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        ServicesModule,
        SharedModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: '',
                component: SettingsPage,
                data: {
                    breadcrumb: 'Listado',
                    title: 'Configuracion - Listado',
                },
            },
        ]),
    ],
    declarations: [SettingsPage],
    providers: [],
})
export class SettingsModule {}
