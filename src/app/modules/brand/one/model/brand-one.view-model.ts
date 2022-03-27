import { CustomTableOptionsModel } from 'src/app/components/custom-table/model/custom-table.options-model';
import { CustomTitleWithButtonsViewModel } from 'src/app/components/custom-title-with-buttons/model/custom-title-with-buttons.view-model';
import { SegmentsViewModel } from 'src/app/components/segments/model/segments.view-model';
import { Brand } from 'src/app/models/brand.model';

export class BrandOnePageViewModel {
  id!: string;
  item: Brand = new Brand();
  optionsTitle = new CustomTitleWithButtonsViewModel({
    title: '',
    buttons: [],
  });
  optionsSegments = new SegmentsViewModel({
    segments: ['Info', 'Opciones', 'Imagen', 'Coches'],
    currentSegment: 0,
  });
  edit = false;
  options = [
    {
      name: 'Eliminar',
      value: 'delete',
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
