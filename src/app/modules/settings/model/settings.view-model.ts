import { CustomTitleWithButtonsViewModel } from 'src/app/components/custom-title-with-buttons/model/custom-title-with-buttons.view-model';
import { Settings } from 'src/app/models';

export class SettingsViewModel {
    optionsTitle = new CustomTitleWithButtonsViewModel({
        title: 'Configuracion',
        buttons: [],
    });
    settings = new Settings();
}
