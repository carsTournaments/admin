import { CustomTitleWithButtonsViewModel } from 'src/app/components/custom-title-with-buttons/model/custom-title-with-buttons.view-model';
import { SegmentsViewModel } from 'src/app/components/segments/model/segments.view-model';
import { Car } from 'src/app/models/car.model';
import { Inscription } from 'src/app/models/inscription.model';
import { Tournament } from 'src/app/models/tournament.model';

export class InscriptionOnePageViewModel {
  id!: string;
  item: Inscription = new Inscription();
  cars: Car[] = [];
  tournaments: Tournament[] = [];
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
