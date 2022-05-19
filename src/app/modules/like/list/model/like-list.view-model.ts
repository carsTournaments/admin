import { CustomTableOptionsModel } from 'src/app/components/custom-table/model/custom-table.options-model';
import { CustomTitleWithButtonsViewModel } from 'src/app/components/custom-title-with-buttons/model/custom-title-with-buttons.view-model';
import { User } from 'src/app/models/user.model';
import { LikeGetAllDto } from 'src/app/services/api/like/like.dto';

export class LikeListViewModel {
    items: User[] = [];
    optionsTitle = new CustomTitleWithButtonsViewModel({
        title: 'Likes',
        buttons: [{ name: 'Nuevo', link: '/likes/one', separated: false }],
    });
    optionsTable = new CustomTableOptionsModel({
        loading: false,
        items: [],
        type: 'like',
        showLoadMore: true,
        error: false,
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
