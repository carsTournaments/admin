import { CustomTitleWithButtonsViewModel } from 'src/app/components/custom-title-with-buttons/model/custom-title-with-buttons.view-model';
import { SegmentsViewModel } from 'src/app/components/segments/model/segments.view-model';
import { Inscription } from 'src/app/models/inscription.model';

export class InscriptionOnePageViewModel {
  id!: string;
  item: Inscription = new Inscription();
  optionsTitle = new CustomTitleWithButtonsViewModel({
    title: '',
    buttons: [],
  });
  optionsSegments = new SegmentsViewModel({
    segments: ['Info', 'Opciones'],
    currentSegment: 0,
  });
  edit = false;
  options = [
    {
      name: 'Prueba',
      value: 'changePassword',
    },
  ];
}
