import { CustomTableOptionsModel } from 'src/app/components/custom-table/model/custom-table.options-model';
import { CustomTitleWithButtonsViewModel } from 'src/app/components/custom-title-with-buttons/model/custom-title-with-buttons.view-model';
import { SegmentsViewModel } from 'src/app/components/segments/model/segments.view-model';
import { User } from 'src/app/models/user.model';
import { TournamentGetAllDto } from 'src/app/services/tournament/tournament.dto';

export class TournamentListViewModel {
  items: User[] = [];
  optionsTitle = new CustomTitleWithButtonsViewModel({
    title: 'Torneos',
    buttons: [{ name: 'Nuevo', link: '/tournaments/one', separated: false }],
  });
  optionsTable = new CustomTableOptionsModel({
    loading: false,
    items: [],
    type: 'tournament',
    showLoadMore: true,
    error: false,
  });
  optionsSegments = new SegmentsViewModel({
    segments: ['Listado', 'Opciones'],
    currentSegment: 0,
  });
  tournamentBody: TournamentGetAllDto = {
    page: 1,
    pageSize: 20,
    order: ['created', 'desc'],
    site: 'admin',
  };
  options = [
    {
      name: 'Prueba',
      value: '',
    },
  ];
}
