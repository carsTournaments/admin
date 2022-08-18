import { Notification } from '@models/notification.model';
import { User } from '@models';
import { CustomTableOptionsModel } from '@components/custom-table/models/custom-table.options-model';

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
    carsOptionsTable = new CustomTableOptionsModel({
        type: 'carsUser',
        items: [],
        loading: true,
    });
    likesSentOptionsTable = new CustomTableOptionsModel({
        type: 'likesUser',
        items: [],
        loading: true,
    });
    notification = new Notification();
    countries: { id: string; name: string }[] = [];
    countryIdSelected = '';
}
