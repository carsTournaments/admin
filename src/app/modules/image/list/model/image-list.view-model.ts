import { CustomTableOptionsModel } from 'src/app/components/custom-table/model/custom-table.options-model';
import { CustomTitleWithButtonsViewModel } from 'src/app/components/custom-title-with-buttons/model/custom-title-with-buttons.view-model';
import { User } from 'src/app/models/user.model';
import { ImageGetAllDto } from 'src/app/services/api/image/image.dto';

export class ImageListViewModel {
    items: User[] = [];
    optionsTitle = new CustomTitleWithButtonsViewModel({
        title: 'Imagenes',
        buttons: [{ name: 'Nuevo', link: '/images/one', separated: false }],
    });
    optionsTable = new CustomTableOptionsModel({
        loading: false,
        items: [],
        type: 'image',
        showLoadMore: true,
        error: false,
    });
    userBody: ImageGetAllDto = {
        page: 1,
        pageSize: 10,
        site: 'admin',
        order: ['created', 'desc'],
    };
    options = [
        {
            name: 'Eliminar todas las imagenes',
            value: 'deleteAll',
        },
    ];
    imageBody: ImageGetAllDto = {
        page: 1,
        pageSize: 20,
        site: 'admin',
        order: ['created', 'desc'],
    };
}
