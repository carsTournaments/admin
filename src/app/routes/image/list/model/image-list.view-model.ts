import { CustomTable2OptionsModel } from '@components/custom-table2/models/custom-table2.options-model';
import { User } from '@models';
import { ImageGetAllDto } from '@services/api/image/image.dto';

export class ImageListViewModel {
    items: User[] = [];
    title = 'Imagenes';
    optionsTable = new CustomTable2OptionsModel({
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
