import { CustomTableOptionsModel } from '@components/custom-table/model/custom-table.options-model';
import { GetAllDto } from '@core/dtos/generic.dto';

export class NotificationListViewModel {
    title = 'Notificaciones';
    optionsTable = new CustomTableOptionsModel({
        loading: false,
        items: [],
        type: 'notification',
        showLoadMore: true,
        error: false,
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
