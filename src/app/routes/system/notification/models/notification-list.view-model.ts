import { CustomTable2OptionsModel } from '@components/custom-table2/models/custom-table2.options-model';
import { GetAllDto } from '@core/dtos/generic.dto';

export class NotificationListViewModel {
    title = 'Notificaciones Push';
    optionsTable = new CustomTable2OptionsModel({
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
