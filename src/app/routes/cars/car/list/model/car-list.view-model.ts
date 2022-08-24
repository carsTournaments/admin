import { CustomTableOptionsModel } from '@components/custom-table/models/custom-table.options-model';
import { User } from '@models';
import { CarGetAllDto } from '@services/api/car/car.dto';
import { CarStatsI } from '@services/api/car/car.interface';

export class CarListViewModel {
    items: User[] = [];
    title = 'Coches';
    optionsTable = new CustomTableOptionsModel({
        type: 'cars',
        items: [],
        loading: true,
        showLoadMore: true,
        dialog: true,
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
            name: 'Eliminar coches falsos sin imagenes',
            value: 'deleteFakesWithoutPhoto',
        },
        {
            name: 'Eliminar coches falsos',
            value: 'deleteFakes',
        },
    ];
    carStats!: CarStatsI[];
    searchState = false;
}
