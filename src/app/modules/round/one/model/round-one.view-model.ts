import { CustomTableOptionsModel } from 'src/app/components/custom-table/model/custom-table.options-model';
import { CustomTitleWithButtonsViewModel } from 'src/app/components/custom-title-with-buttons/model/custom-title-with-buttons.view-model';
import { SegmentsViewModel } from 'src/app/components/segments/model/segments.view-model';
import { Round } from 'src/app/models/round.model';
export class RoundOnePageViewModel {
  id!: string;
  item: Round = new Round();
  optionsTitle = new CustomTitleWithButtonsViewModel({
    title: '',
    buttons: [],
  });
  optionsSegments = new SegmentsViewModel({
    segments: ['Info', 'Opciones', 'Emparejamientos'],
    currentSegment: 0,
  });
  pairingsOptionsTable = new CustomTableOptionsModel({
    loading: false,
    items: [],
    type: 'pairing',
    showLoadMore: true,
    error: false,
  });
  edit = false;
  options = [
    {
      name: 'Prueba',
      value: 'changePassword',
    },
  ];
}
