import { CustomTableOptionsModel } from '@components/custom-table/model/custom-table.options-model';
import { User } from '@models';
import { CarGetAllDto } from '@services/api/car/car.dto';

export class CarListViewModel {
    items: User[] = [];
    title = 'Coches';
    optionsTable = new CustomTableOptionsModel({
        loading: false,
        items: [],
        type: 'car',
        showLoadMore: true,
        error: false,
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
