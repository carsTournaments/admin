import { CustomTableOptionsModel } from 'src/app/components/custom-table/model/custom-table.options-model';
import { CustomTitleWithButtonsViewModel } from 'src/app/components/custom-title-with-buttons/model/custom-title-with-buttons.view-model';
import { SegmentsViewModel } from 'src/app/components/segments/model/segments.view-model';
import { Car } from 'src/app/models/car.model';

export class CarOnePageViewModel {
  id!: string;
  item: Car = new Car();
  optionsTitle = new CustomTitleWithButtonsViewModel({
    title: '',
    buttons: [],
  });
  optionsSegments = new SegmentsViewModel({
    segments: ['Info', 'Opciones', 'Inscripciones', 'Nueva Inscripcion'],
    currentSegment: 0,
  });
  inscriptionsOptionsTable = new CustomTableOptionsModel({
    loading: false,
    items: [],
    type: 'inscription',
    showLoadMore: true,
    error: false,
  });
  edit = false;
  stock = true;
  options = [
    {
      name: 'Eliminar todas las inscripciones',
      value: 'deleteInscriptions',
    },
    {
      name: 'Eliminar coche',
      value: 'delete',
    },
  ];
}
