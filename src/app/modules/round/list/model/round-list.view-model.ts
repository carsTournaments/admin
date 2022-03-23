import { CustomTableOptionsModel } from 'src/app/components/custom-table/model/custom-table.options-model';
import { CustomTitleWithButtonsViewModel } from 'src/app/components/custom-title-with-buttons/model/custom-title-with-buttons.view-model';
import { SegmentsViewModel } from 'src/app/components/segments/model/segments.view-model';
import { User } from 'src/app/models/user.model';
import { RoundGetAllDto } from 'src/app/services/round/round.dto';

export class RoundListViewModel {
  items: User[] = [];
  optionsTitle = new CustomTitleWithButtonsViewModel({
    title: 'Rondas',
    buttons: [],
  });
  optionsTable = new CustomTableOptionsModel({
    loading: false,
    items: [],
    type: 'round',
    showLoadMore: true,
    error: false,
  });
  optionsSegments = new SegmentsViewModel({
    segments: ['Listado', 'Opciones'],
    currentSegment: 0,
  });
  options = [
    {
      name: 'Prueba',
      value: '',
    },
  ];
  roundBody: RoundGetAllDto = {
    page: 1,
    pageSize: 20,
    site: 'admin',
    order: ['created', 'desc'],
  };
}
