import { Car } from 'src/app/models/car.model';
import { Tournament } from 'src/app/models/tournament.model';
import { CustomTitleWithButtonsViewModel } from 'src/app/components/custom-title-with-buttons/model/custom-title-with-buttons.view-model';
import { Winner } from 'src/app/models/winner.model';
import { CarGetAllDto } from 'src/app/services/api/car/car.dto';
import { TournamentGetAllDto } from 'src/app/services/api/tournament/tournament.dto';

export class WinnerOnePageViewModel {
    id!: string;
    item: Winner = new Winner();
    optionsTitle = new CustomTitleWithButtonsViewModel({
        title: '',
        buttons: [],
    });
    edit = false;
    options = [
        {
            name: 'Eliminar ganadores',
            value: 'deleteOne',
        },
    ];
    gold = '';
    silver = '';
    bronze = '';
    tournament = '';
    bodyTournaments: TournamentGetAllDto = {
        page: 1,
        pageSize: 1000,
        site: 'admin',
        order: ['name', 'desc'],
    };
    bodyCars: CarGetAllDto = {
        page: 1,
        pageSize: 1000,
        site: 'admin',
        order: ['name', 'desc'],
        onlyWithPhoto: false,
    };
    tournaments: Tournament[] = [];
    cars: Car[] = [];
}
