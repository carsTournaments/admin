import { CustomTableOptionsModel } from '@components/custom-table/model/custom-table.options-model';
import { User } from '@models';
import { ImageGetAllDto } from '@services/api/image/image.dto';

export class ImageListViewModel {
    items: User[] = [];
    title = 'Imagenes';
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
