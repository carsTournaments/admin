import { CustomTableOptionsModel } from 'src/app/components/custom-table/model/custom-table.options-model';
import { CustomTitleWithButtonsViewModel } from 'src/app/components/custom-title-with-buttons/model/custom-title-with-buttons.view-model';
import { SegmentsViewModel } from 'src/app/components/segments/model/segments.view-model';
import { User } from 'src/app/models/user.model';
import { WinnerGetAllDto } from 'src/app/services/winner/winner.dto';

export class WinnerListViewModel {
  items: User[] = [];
  optionsTitle = new CustomTitleWithButtonsViewModel({
    title: 'Ganadores',
    buttons: [{ name: 'Nuevo', link: '/winners/one', separated: false }],
  });
  optionsTable = new CustomTableOptionsModel({
    loading: false,
    items: [],
    type: 'winner',
    showLoadMore: true,
    error: false,
  });
  optionsSegments = new SegmentsViewModel({
    segments: ['Listado', 'Opciones'],
    currentSegment: 0,
  });
  options = [
    {
      name: 'Eliminar todos los ganadores',
      value: 'deleteAll',
    },
  ];
  winnerBody: WinnerGetAllDto = {
    page: 1,
    pageSize: 20,
    site: 'admin',
    order: ['created', 'desc'],
  };
}
