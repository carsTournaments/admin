import { Notification } from '@models/notification.model';
import { User } from '@models';
import { CustomTable2OptionsModel } from '@components/custom-table2/models/custom-table2.options-model';

export class UserOnePageViewModel {
    id!: string;
    item: User = new User();
    title = '';
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
    carsOptionsTable = new CustomTable2OptionsModel({
        type: 'cars',
        items: [],
        loading: true,
    });
    notification = new Notification();
}
