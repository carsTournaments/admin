import { CustomTable2OptionsModel } from '@components/custom-table2/models/custom-table2.options-model';
import { User } from '@models';
import { CarGetAllDto } from '@services/api/car/car.dto';

export class CarListViewModel {
    items: User[] = [];
    title = 'Coches';
    optionsTable = new CustomTable2OptionsModel({
        type: 'cars',
        items: [],
        loading: true,
        showLoadMore: true,
    });
    carBody: CarGetAllDto = {
        page: 1,
        pageSize: 20,
        site: 'admin',
        order: ['created', 'desc'],
        onlyWithPhoto: false,
    };
    options = [
        {
            name: 'Crear coches falsos',
            value: 'createFakes',
        },
        {
            name: 'Eliminar coches falsos',
            value: 'deleteFakes',
        },
    ];
}
