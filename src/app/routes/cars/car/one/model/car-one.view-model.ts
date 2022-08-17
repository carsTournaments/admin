import { Winner } from '@models/winner.model';
import { Car } from '@models/car.model';
import { CustomTableOptionsModel } from '@components/custom-table/models/custom-table.options-model';
import { IdDto } from '@core/dtos/generic.dto';

export class CarOnePageViewModel {
    id!: string;
    item: Car = new Car();
    title = '';
    edit = false;
    stock = true;
    options = [
        {
            name: 'Like anonimo',
            value: 'like',
        },
        {
            name: 'Reportar',
            value: 'report',
        },
        {
            name: 'Eliminar todos los reportes',
            value: 'deleteInscriptions',
        },
        {
            name: 'Eliminar todas las inscripciones',
            value: 'deleteInscriptions',
        },
        {
            name: 'Eliminar coche',
            value: 'delete',
        },
    ];
    bodyWinners: IdDto = {
        id: '',
    };
    inscriptionsOptionsTable = new CustomTableOptionsModel({
        type: 'inscriptionsCar',
        items: [],
        loading: true,
        showLoadMore: true,
    });
    likesReceivedOptionsTable = new CustomTableOptionsModel({
        type: 'likesCar',
        items: [],
        loading: true,
        showLoadMore: true,
    });
    votesOptionsTable = new CustomTableOptionsModel({
        type: 'votesCar',
        items: [],
        loading: true,
        showLoadMore: true,
    });
    winnersOptionsTable = new CustomTableOptionsModel({
        type: 'winners',
        items: [],
        loading: true,
        showLoadMore: true,
    });
    winners: Winner[] = [];
}
