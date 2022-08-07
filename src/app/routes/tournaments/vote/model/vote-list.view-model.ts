import { CustomTableOptionsModel } from '@components/custom-table/models/custom-table.options-model';
import { User } from '@models';
import { VoteGetAllDto } from '@services/api/vote/dtos/vote.dto';

export class VoteListViewModel {
    items: User[] = [];
    title = 'Votos';
    optionsTable = new CustomTableOptionsModel({
        type: 'votes',
        items: [],
        loading: true,
        showLoadMore: true,
    });
    options = [
        {
            name: 'Crear votos anonimos aleatorios',
            value: 'createFakeVotes',
        },
        {
            name: 'Limpiar votos sin usuario y sin uuid',
            value: 'cleanVotes',
        },
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
