import { CustomTableOptionsModel } from '@components/custom-table/model/custom-table.options-model';
import { User } from '@models';
import { VoteGetAllDto } from '@services/api/vote/dtos/vote.dto';

export class VoteListViewModel {
    items: User[] = [];
    title = 'Votos';
    optionsTable = new CustomTableOptionsModel({
        loading: false,
        items: [],
        type: 'vote',
        showLoadMore: true,
        error: false,
    });
    options = [
        {
            name: 'Eliminar todos los votos',
            value: 'deleteAll',
        },
    ];
    voteBody: VoteGetAllDto = {
        page: 1,
        pageSize: 20,
        site: 'admin',
        order: ['created', 'desc'],
    };
}
