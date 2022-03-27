import { CustomTableOptionsModel } from 'src/app/components/custom-table/model/custom-table.options-model';
import { CustomTitleWithButtonsViewModel } from 'src/app/components/custom-title-with-buttons/model/custom-title-with-buttons.view-model';
import { SegmentsViewModel } from 'src/app/components/segments/model/segments.view-model';
import { User } from 'src/app/models/user.model';
export class UserOnePageViewModel {
  id!: string;
  item: User = new User();
  optionsTitle = new CustomTitleWithButtonsViewModel({
    title: '',
    buttons: [],
  });
  optionsSegments = new SegmentsViewModel({
    segments: ['Info', 'Opciones', 'Coches'],
    currentSegment: 0,
  });
  edit = false;
  options = [
    {
      name: 'Cambiar contraseña',
      value: 'changePassword',
    },
    {
      name: 'Eliminar Usuario',
      value: 'deleteUser',
    },
  ];
  carsOptionsTable = new CustomTableOptionsModel({
    loading: false,
    items: [],
    type: 'car',
    showLoadMore: true,
    error: false,
  });
}
