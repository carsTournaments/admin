import { CustomTableOptionsModel } from '@components/custom-table/model/custom-table.options-model';
import { CustomTitleWithButtonsViewModel } from '@components/custom-title-with-buttons/model/custom-title-with-buttons.view-model';
import { Notification } from '@models/notification.model';
import { User } from '@models';
export class UserOnePageViewModel {
    id!: string;
    item: User = new User();
    optionsTitle = new CustomTitleWithButtonsViewModel({
        title: '',
        buttons: [],
    });
    edit = false;
    options = [
        {
            name: 'Cambiar contraseña',
            value: 'changePassword',
        },
        {
            name: 'Eliminar Usuario',
            value: 'deleteUser',
        },
    ];
    carsOptionsTable = new CustomTableOptionsModel({
        loading: false,
        items: [],
        type: 'car',
        showLoadMore: true,
        error: false,
    });
    notification = new Notification();
}
