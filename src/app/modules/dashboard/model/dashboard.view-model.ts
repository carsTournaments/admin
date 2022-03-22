import { CustomTableOptionsModel } from 'src/app/components/custom-table/model/custom-table.options-model';
import { CustomTitleWithButtonsViewModel } from 'src/app/components/custom-title-with-buttons/model/custom-title-with-buttons.view-model';
import { StatsOptionsModel } from 'src/app/components/stats/models/stats.options-model';
import { CarGetAllDto } from 'src/app/services/car/car.dto';
import { TournamentGetAllDto } from 'src/app/services/tournament/tournament.dto';

export class DashboardViewModel {
  tournamentsOptionsTitle = new CustomTitleWithButtonsViewModel({
    title: 'Ultimos Torneos',
    buttons: [
      { name: 'Todos', link: '/sites/', separated: false },
      { name: 'Nuevo', link: '/sites/one/', separated: true },
    ],
  });
  carsOptionsTitle = new CustomTitleWithButtonsViewModel({
    title: 'Ultimos Coches',
    buttons: [
      { name: 'Todos', link: '/events/', separated: false },
      { name: 'Nuevo', link: '/events/one/', separated: true },
    ],
  });
  statsOptionsTitle = new CustomTitleWithButtonsViewModel({
    title: 'Servidor',
    buttons: [{ name: 'Actualizar', link: '', separated: false }],
  });

  tournamentsOptionsTable = new CustomTableOptionsModel({
    loading: false,
    type: 'tournament',
    items: [],
    showLoadMore: false,
    error: false,
  });
  carsOptionsTable = new CustomTableOptionsModel({
    type: 'car',
    loading: true,
    items: [],
    error: false,
    showLoadMore: false,
  });
  statsOptions = new StatsOptionsModel({
    loading: true,
    error: false,
    items: [],
    type: '',
  });
  tournamentBody: TournamentGetAllDto = {
    page: 1,
    pageSize: 5,
    order: ['created', 'desc'],
    site: 'admin',
  };
  carBody: CarGetAllDto = {
    page: 1,
    pageSize: 5,
    order: ['created', 'desc'],
    site: 'admin',
  };
}
