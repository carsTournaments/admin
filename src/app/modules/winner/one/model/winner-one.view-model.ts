import { Car } from 'src/app/models/car.model';
import { Tournament } from 'src/app/models/tournament.model';
import { TournamentGetAllDto } from 'src/app/services/tournament/tournament.dto';
import { CustomTitleWithButtonsViewModel } from 'src/app/components/custom-title-with-buttons/model/custom-title-with-buttons.view-model';
import { SegmentsViewModel } from 'src/app/components/segments/model/segments.view-model';
import { Winner } from 'src/app/models/winner.model';
import { CarGetAllDto } from 'src/app/services/car/car.dto';

export class WinnerOnePageViewModel {
  id!: string;
  item: Winner = new Winner();
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
  };
  tournaments: Tournament[] = [];
  cars: Car[] = [];
}
