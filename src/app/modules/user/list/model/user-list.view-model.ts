import { CustomTableOptionsModel } from 'src/app/components/custom-table/model/custom-table.options-model';
import { CustomTitleWithButtonsViewModel } from 'src/app/components/custom-title-with-buttons/model/custom-title-with-buttons.view-model';
import { SegmentsViewModel } from 'src/app/components/segments/model/segments.view-model';
import { User } from 'src/app/models/user.model';
import { UserGetAllDto } from 'src/app/services/user/dtos/user.dto';

export class UserListViewModel {
  items: User[] = [];
  optionsTitle = new CustomTitleWithButtonsViewModel({
    title: 'Usuarios',
    buttons: [{ name: 'Nuevo', link: '/users/one', separated: false }],
  });
  optionsTable = new CustomTableOptionsModel({
    loading: false,
    items: [],
    type: 'user',
    showLoadMore: true,
    error: false,
  });
  optionsSegments = new SegmentsViewModel({
    segments: ['Listado', 'Opciones'],
    currentSegment: 0,
  });
  options = [
    {
      name: 'Crear usuarios falsos',
      value: 'createFakes',
    },
    {
      name: 'Eliminar usuarios falsos',
      value: 'deleteFakes',
    },
  ];
  userBody: UserGetAllDto = {
    page: 1,
    pageSize: 20,
    site: 'admin',
    order: ['created', 'desc'],
  };
}
