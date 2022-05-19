import { CustomTableOptionsModel } from 'src/app/components/custom-table/model/custom-table.options-model';
import { CustomTitleWithButtonsViewModel } from 'src/app/components/custom-title-with-buttons/model/custom-title-with-buttons.view-model';
import { User } from 'src/app/models/user.model';
import { CarGetAllDto } from 'src/app/services/api/car/car.dto';

export class CarListViewModel {
    items: User[] = [];
    optionsTitle = new CustomTitleWithButtonsViewModel({
        title: 'Coches',
        buttons: [{ name: 'Nuevo', link: '/cars/one', separated: false }],
    });
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
