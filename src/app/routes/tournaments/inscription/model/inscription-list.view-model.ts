import { CustomTableOptionsModel } from '@components/custom-table/models/custom-table.options-model';
import { User } from '@models';
import { InscriptionGetAllDto } from '@services/api/inscription/inscription.dto';

export class InscriptionListViewModel {
    items: User[] = [];
    title = 'Inscripciones';
    optionsTable = new CustomTableOptionsModel({
        type: 'inscriptions',
        items: [],
        loading: true,
        showLoadMore: true,
    });
    userBody: InscriptionGetAllDto = {
        page: 1,
        pageSize: 10,
        site: 'admin',
        order: ['created', 'desc'],
    };
    options = [
        {
            name: 'Prueba',
            value: '',
        },
    ];
    inscriptionBody: InscriptionGetAllDto = {
        page: 1,
        pageSize: 20,
        site: 'admin',
        order: ['created', 'desc'],
    };
}
