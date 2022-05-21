import { CustomTableOptionsModel } from '@components/custom-table/model/custom-table.options-model';
import { CustomTitleWithButtonsViewModel } from '@components/custom-title-with-buttons/model/custom-title-with-buttons.view-model';
import { User } from '@models';
import { UserGetAllDto } from '@services/api/user/dtos/user.dto';

export class UserListViewModel {
    items: User[] = [];
    optionsTitle = new CustomTitleWithButtonsViewModel({
        title: 'Usuarios',
        buttons: [{ name: 'Nuevo', link: '/users/one', separated: false }],
    });
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
