import { CustomTableOptionsModel } from 'src/app/components/custom-table/model/custom-table.options-model';
import { CustomTitleWithButtonsViewModel } from 'src/app/components/custom-title-with-buttons/model/custom-title-with-buttons.view-model';
import { SegmentsViewModel } from 'src/app/components/segments/model/segments.view-model';
import { User } from 'src/app/models/user.model';
import { VoteGetAllDto } from 'src/app/services/vote/dtos/vote.dto';

export class VoteListViewModel {
  items: User[] = [];
  optionsTitle = new CustomTitleWithButtonsViewModel({
    title: 'Votos',
    buttons: [{ name: 'Nuevo', link: '/votes/one', separated: false }],
  });
  optionsTable = new CustomTableOptionsModel({
    loading: false,
    items: [],
    type: 'vote',
    showLoadMore: true,
    error: false,
  });
  optionsSegments = new SegmentsViewModel({
    segments: ['Listado', 'Opciones'],
    currentSegment: 0,
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
