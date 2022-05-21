import { CustomTable2OptionsModel } from '@components/custom-table2/models/custom-table2.options-model';
import { User } from '@models';
import { UserGetAllDto } from '@services/api/user/dtos/user.dto';

export class UserListViewModel {
    items: User[] = [];
    title = 'Usuarios';
    optionsTable = new CustomTable2OptionsModel({
        type: 'users',
        items: [],
        loading: true,
        showLoadMore: true,
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
