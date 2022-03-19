import { CustomTableOptionsModel } from 'src/app/components/custom-table/model/custom-table.options-model';
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
    segments: ['Info', 'Opciones'],
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
  options = [
    {
      name: 'Forzar inscripciones',
      value: 'forceInscriptions',
    },
    {
      name: 'Forzar inicio de torneo',
      value: 'startTournament',
    },
    {
      name: 'Eliminar inscripciones',
      value: 'deleteInscriptions',
    },
    {
      name: 'Eliminar torneo',
      value: 'delete',
    },
  ];
}
