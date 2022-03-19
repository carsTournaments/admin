import { CustomTableOptionsModel } from 'src/app/components/custom-table/model/custom-table.options-model';
import { CustomTitleWithButtonsViewModel } from 'src/app/components/custom-title-with-buttons/model/custom-title-with-buttons.view-model';
import { StatsOptionsModel } from 'src/app/components/stats/models/stats.options-model';

export class DashboardViewModel {
  sitesOptionsTitle = new CustomTitleWithButtonsViewModel({
    title: 'Ultimos Sitios',
    buttons: [
      { name: 'Todos', link: '/sites/', separated: false },
      { name: 'Nuevo', link: '/sites/one/', separated: true },
    ],
  });
  eventsOptionsTitle = new CustomTitleWithButtonsViewModel({
    title: 'Ultimos Eventos',
    buttons: [
      { name: 'Todos', link: '/events/', separated: false },
      { name: 'Nuevo', link: '/events/one/', separated: true },
    ],
  });
  statsOptionsTitle = new CustomTitleWithButtonsViewModel({
    title: 'Servidor',
    buttons: [{ name: 'Actualizar', link: '', separated: false }],
  });

  sitesOptionsTable = new CustomTableOptionsModel({
    loading: false,
    type: 'tournament',
    items: [],
    showLoadMore: false,
    error: false,
  });
  eventsOptionsTable = new CustomTableOptionsModel({
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
}
