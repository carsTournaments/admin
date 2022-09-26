import { Report } from '@models';

export class ReportOnePageViewModel {
    id!: string;
    item: Report = new Report();
    title = '';
    edit = false;
    options = [
        {
            name: 'Eliminar reporte',
            value: 'delete',
        },
    ];
}
