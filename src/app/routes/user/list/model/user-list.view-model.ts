import { CustomTableOptionsModel } from '@components/custom-table/model/custom-table.options-model';
import { User } from '@models';
import { UserGetAllDto } from '@services/api/user/dtos/user.dto';

export class UserListViewModel {
    items: User[] = [];
    title = 'Usuarios';
    optionsTable = new CustomTableOptionsModel({
        loading: false,
        items: [],
        type: 'user',
        showLoadMore: true,
        error: false,
    });
    options = [
        {
            name: 'Crear usuarios falsos',
            value: 'createFakes',
        },
        {
            name: 'Eliminar usuarios falsos',
            value: 'deleteFakes',
        },
    ];
    userBody: UserGetAllDto = {
        page: 1,
        pageSize: 20,
        site: 'admin',
        order: ['created', 'desc'],
    };
}
