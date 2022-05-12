import { CustomTitleWithButtonsViewModel } from 'src/app/components/custom-title-with-buttons/model/custom-title-with-buttons.view-model';
import { SegmentsViewModel } from 'src/app/components/segments/model/segments.view-model';
import { Car } from 'src/app/models/car.model';
import { Inscription } from 'src/app/models/inscription.model';
import { Tournament } from 'src/app/models/tournament.model';
import { CarGetAllDto } from 'src/app/services/api/car/car.dto';
import { TournamentGetAllDto } from 'src/app/services/api/tournament/tournament.dto';

export class InscriptionOnePageViewModel {
    id!: string;
    item: Inscription = new Inscription();
    cars: Car[] = [];
    carBody: CarGetAllDto = {
        page: 1,
        pageSize: 1000,
        site: 'admin',
        order: ['created', 'desc'],
        onlyWithPhoto: false,
    };
    tournaments: Tournament[] = [];
    tournamentBody: TournamentGetAllDto = {
        page: 1,
        pageSize: 1000,
        site: 'admin',
        order: ['created', 'desc'],
    };
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
