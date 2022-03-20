import { CustomTitleWithButtonsViewModel } from 'src/app/components/custom-title-with-buttons/model/custom-title-with-buttons.view-model';
import { SegmentsViewModel } from 'src/app/components/segments/model/segments.view-model';
import { Pairing } from 'src/app/models/pairing.model';

export class PairingOnePageViewModel {
  id!: string;
  item: Pairing = new Pairing();
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
      name: 'Votar Coche 1',
      value: 'voteCar1',
    },
    {
      name: 'Votar Coche 2',
      value: 'voteCar2',
    },
  ];
}
