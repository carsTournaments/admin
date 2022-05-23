import { CustomTableOptionsModel } from '@components/custom-table/models/custom-table.options-model';
import { GetAllDto } from '@core/dtos/generic.dto';

export class NotificationListViewModel {
    title = 'Notificaciones Push';
    optionsTable = new CustomTableOptionsModel({
        type: 'notifications',
        items: [],
        loading: true,
        showLoadMore: true,
    });
    notificationBody: GetAllDto = {
        page: 1,
        pageSize: 20,
        order: ['created', 'desc'],
        site: 'admin',
    };
    options = [
        {
            name: 'Eliminar todas las notificaciones',
            value: 'deleteAll',
        },
    ];
}
