import { CustomTable2OptionsModel } from '@components/custom-table2/models/custom-table2.options-model';
import { User } from '@models';
import { LikeGetAllDto } from '@services/api/like/like.dto';

export class LikeListViewModel {
    items: User[] = [];
    title = 'Likes';
    optionsTable = new CustomTable2OptionsModel({
        type: 'likes',
        items: [],
        loading: true,
        showLoadMore: true,
    });
    options = [
        {
            name: 'Crear fake likes',
            value: 'createFake',
        },
        {
            name: 'Limpiar likes rotos',
            value: 'cleanLikes',
        },
        {
            name: 'Eliminar todos los likes',
            value: 'deleteAll',
        },
    ];
    likeBody: LikeGetAllDto = {
        page: 1,
        pageSize: 20,
        site: 'admin',
        order: ['created', 'desc'],
    };
}
