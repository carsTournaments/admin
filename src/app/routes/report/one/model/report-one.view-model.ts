import { Report } from '@models/report.model';

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
