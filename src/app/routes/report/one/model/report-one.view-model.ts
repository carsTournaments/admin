import { CustomTitleWithButtonsViewModel } from '@components/custom-title-with-buttons/model/custom-title-with-buttons.view-model';
import { Report } from '@models/report.model';

export class ReportOnePageViewModel {
    id!: string;
    item: Report = new Report();
    optionsTitle = new CustomTitleWithButtonsViewModel({
        title: '',
        buttons: [],
    });
    edit = false;
    options = [
        {
            name: 'Eliminar reporte',
            value: 'delete',
        },
    ];
}
