import { CustomTableOptionsModel } from '@components/custom-table/models/custom-table.options-model';
import { User } from '@models';
import { ImageGetAllDto } from '@services/api/image/image.dto';

export class ImageListViewModel {
    items: User[] = [];
    title = 'Imagenes';
    optionsTable = new CustomTableOptionsModel({
        type: 'images',
        items: [],
        loading: true,
        showLoadMore: true,
    });
    userBody: ImageGetAllDto = {
        page: 1,
        pageSize: 10,
        site: 'admin',
        order: ['created', 'desc'],
    };
    options = [
        {
            name: 'Prueba',
            value: '',
        },
    ];
    imageBody: ImageGetAllDto = {
        page: 1,
        pageSize: 20,
        site: 'admin',
        order: ['created', 'desc'],
    };
}
