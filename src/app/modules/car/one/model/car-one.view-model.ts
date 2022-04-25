import { Winner } from 'src/app/models/winner.model';
import { UserGetAllDto } from 'src/app/services/user/dtos/user.dto';
import { BrandGetAllDto } from 'src/app/services/brand/brand.dto';
import { CustomTableOptionsModel } from 'src/app/components/custom-table/model/custom-table.options-model';
import { CustomTitleWithButtonsViewModel } from 'src/app/components/custom-title-with-buttons/model/custom-title-with-buttons.view-model';
import { SegmentsViewModel } from 'src/app/components/segments/model/segments.view-model';
import { Car } from 'src/app/models/car.model';
import { Brand } from 'src/app/models/brand.model';
import { User } from 'src/app/models/user.model';
import { WinnerGetAllDto } from 'src/app/services/winner/winner.dto';

export class CarOnePageViewModel {
    id!: string;
    item: Car = new Car();
    optionsTitle = new CustomTitleWithButtonsViewModel({
        title: '',
        buttons: [],
    });
    optionsSegments = new SegmentsViewModel({
        segments: [
            'Info',
            'Opciones',
            'Imagen',
            'Inscripciones',
            'Nueva Inscripcion',
            'Votos',
            'Torneos Ganados',
        ],
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
    stock = true;
    options = [
        {
            name: 'Like anonimo',
            value: 'like',
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
    bodyBrands: BrandGetAllDto = {
        page: 1,
        pageSize: 1000,
        site: 'admin',
        order: ['created', 'desc'],
        select: ['name'],
    };
    brands: Brand[] = [];
    brandIdSelected = '';
    bodyUsers: UserGetAllDto = {
        page: 1,
        pageSize: 1000,
        site: 'admin',
        order: ['created', 'desc'],
    };
    users: User[] = [];
    userIdSelected = '';
    votesOptionsTable = new CustomTableOptionsModel({
        loading: false,
        items: [],
        type: 'vote',
        showLoadMore: true,
        error: false,
    });
    winnersOptionsTable = new CustomTableOptionsModel({
        loading: false,
        items: [],
        type: 'winner',
        showLoadMore: true,
        error: false,
    });
    bodyWinners: WinnerGetAllDto = {
        page: 1,
        pageSize: 1000,
        site: 'admin',
        order: ['created', 'desc'],
    };
    winners: Winner[] = [];
}
