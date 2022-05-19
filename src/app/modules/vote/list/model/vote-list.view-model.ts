import { CustomTableOptionsModel } from 'src/app/components/custom-table/model/custom-table.options-model';
import { CustomTitleWithButtonsViewModel } from 'src/app/components/custom-title-with-buttons/model/custom-title-with-buttons.view-model';
import { User } from 'src/app/models/user.model';
import { VoteGetAllDto } from 'src/app/services/api/vote/dtos/vote.dto';

export class VoteListViewModel {
    items: User[] = [];
    optionsTitle = new CustomTitleWithButtonsViewModel({
        title: 'Votos',
        buttons: [],
    });
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
