import { CustomTableOptionsModel } from 'src/app/components/custom-table/model/custom-table.options-model';
import { CustomTitleWithButtonsViewModel } from 'src/app/components/custom-title-with-buttons/model/custom-title-with-buttons.view-model';
import { SegmentsViewModel } from 'src/app/components/segments/model/segments.view-model';
import { User } from 'src/app/models/user.model';

export class PairingListViewModel {
  items: User[] = [];
  optionsTitle = new CustomTitleWithButtonsViewModel({
    title: 'Emparejamientos',
    buttons: [{ name: 'Nuevo', link: '/pairings/one', separated: false }],
  });
  optionsTable = new CustomTableOptionsModel({
    loading: false,
    items: [],
    type: 'pairing',
    showLoadMore: true,
    error: false,
  });
  optionsSegments = new SegmentsViewModel({
    segments: ['Listado', 'Opciones'],
    currentSegment: 0,
  });
  options = [
    {
      name: 'Eliminar todos los emparejamientos',
      value: 'deleteAll',
    },
  ];
}
