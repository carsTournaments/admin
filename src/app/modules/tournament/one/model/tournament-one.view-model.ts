import { CustomTitleWithButtonsViewModel } from 'src/app/components/custom-title-with-buttons/model/custom-title-with-buttons.view-model';
import { SegmentsViewModel } from 'src/app/components/segments/model/segments.view-model';
import { Tournament } from 'src/app/models/tournament.model';

export class TournamentOnePageViewModel {
  id!: string;
  item: Tournament = new Tournament();
  optionsTitle = new CustomTitleWithButtonsViewModel({
    title: '',
    buttons: [],
  });
  optionsSegments = new SegmentsViewModel({
    segments: ['Info', 'Opciones', 'Inscritos'],
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
