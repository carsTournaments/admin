import { CustomTableOptionsModel } from 'src/app/components/custom-table/model/custom-table.options-model';
import { CustomTitleWithButtonsViewModel } from 'src/app/components/custom-title-with-buttons/model/custom-title-with-buttons.view-model';
import { SegmentsViewModel } from 'src/app/components/segments/model/segments.view-model';
import { User } from 'src/app/models/user.model';
import { UserGetAllDto } from 'src/app/services/user/dtos/user-get-all.dto';

export class CarListViewModel {
  items: User[] = [];
  optionsTitle = new CustomTitleWithButtonsViewModel({
    title: 'Coches',
    buttons: [{ name: 'Nuevo', link: '/cars/one', separated: false }],
  });
  optionsTable = new CustomTableOptionsModel({
    loading: false,
    items: [],
    type: 'car',
    showLoadMore: true,
    error: false,
  });
  optionsSegments = new SegmentsViewModel({
    segments: ['Listado', 'Opciones'],
    currentSegment: 0,
  });
  userBody: any = {};
  options = [
    {
      name: 'Prueba',
      value: '',
    },
  ];
}
