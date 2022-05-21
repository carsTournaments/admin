import { CustomTableOptionsModel } from '@components/custom-table/model/custom-table.options-model';
import { CustomTitleWithButtonsViewModel } from '@components/custom-title-with-buttons/model/custom-title-with-buttons.view-model';
import { StatsOptionsModel } from '@components/stats/models/stats.options-model';
import { CarGetAllDto } from '@services/api/car/car.dto';
import { TournamentGetAllDto } from '@services/api/tournament/tournament.dto';

export class DashboardViewModel {
    tournamentsOptionsTitle = new CustomTitleWithButtonsViewModel({
        title: 'Ultimos Torneos',
        buttons: [],
    });
    carsOptionsTitle = new CustomTitleWithButtonsViewModel({
        title: 'Ultimos Coches',
        buttons: [],
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
        pageSize: 10,
        order: ['startDate', 'desc'],
        site: 'admin',
    };
    carBody: CarGetAllDto = {
        page: 1,
        pageSize: 10,
        order: ['created', 'desc'],
        site: 'admin',
        onlyWithPhoto: false,
    };
}
