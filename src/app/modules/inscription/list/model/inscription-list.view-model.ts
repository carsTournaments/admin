import { CustomTableOptionsModel } from 'src/app/components/custom-table/model/custom-table.options-model';
import { CustomTitleWithButtonsViewModel } from 'src/app/components/custom-title-with-buttons/model/custom-title-with-buttons.view-model';
import { SegmentsViewModel } from 'src/app/components/segments/model/segments.view-model';
import { User } from 'src/app/models/user.model';
import { InscriptionGetAllDto } from 'src/app/services/inscription/inscription.dto';

export class InscriptionListViewModel {
  items: User[] = [];
  optionsTitle = new CustomTitleWithButtonsViewModel({
    title: 'Inscripciones',
    buttons: [{ name: 'Nuevo', link: '/inscriptions/one', separated: false }],
  });
  optionsTable = new CustomTableOptionsModel({
    loading: false,
    items: [],
    type: 'inscription',
    showLoadMore: true,
    error: false,
  });
  optionsSegments = new SegmentsViewModel({
    segments: ['Listado', 'Opciones'],
    currentSegment: 0,
  });
  userBody: InscriptionGetAllDto = {
    page: 1,
    pageSize: 10,
    site: 'admin',
    order: ['created', 'desc'],
  };
  options = [
    {
      name: 'Prueba',
      value: '',
    },
  ];
  inscriptionBody: InscriptionGetAllDto = {
    page: 1,
    pageSize: 20,
    site: 'admin',
    order: ['created', 'desc'],
  };
}
