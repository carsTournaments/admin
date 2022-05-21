import { CustomTable2OptionsModel } from '@components/custom-table2/models/custom-table2.options-model';
import { User } from '@models';
import { VoteGetAllDto } from '@services/api/vote/dtos/vote.dto';

export class VoteListViewModel {
    items: User[] = [];
    title = 'Votos';
    optionsTable = new CustomTable2OptionsModel({
        type: 'votes',
        items: [],
        loading: true,
        showLoadMore: true,
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
