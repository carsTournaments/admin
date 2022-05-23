import { Winner } from '@models/winner.model';
import { Car } from '@models/car.model';
import { Brand } from '@models/brand.model';
import { User } from '@models';
import { BrandGetAllDto } from '@services/api/brand/brand.dto';
import { UserGetAllDto } from '@services/api/user/dtos/user.dto';
import { WinnerGetAllDto } from '@services/api/winner/winner.dto';
import { CustomTableOptionsModel } from '@components/custom-table/models/custom-table.options-model';

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

    brands: Brand[] = [];
    brandIdSelected = '';
    bodyBrands: BrandGetAllDto = {
        page: 1,
        pageSize: 1000,
        site: 'admin',
        order: ['created', 'desc'],
        select: ['name'],
    };
    bodyUsers: UserGetAllDto = {
        page: 1,
        pageSize: 1000,
        site: 'admin',
        order: ['created', 'desc'],
    };
    bodyWinners: WinnerGetAllDto = {
        page: 1,
        pageSize: 1000,
        site: 'admin',
        order: ['created', 'desc'],
    };
    inscriptionsOptionsTable = new CustomTableOptionsModel({
        type: 'inscriptions',
        items: [],
        loading: true,
        showLoadMore: true,
    });
    likesReceivedOptionsTable = new CustomTableOptionsModel({
        type: 'likes',
        items: [],
        loading: true,
        showLoadMore: true,
    });
    votesOptionsTable = new CustomTableOptionsModel({
        type: 'votes',
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
    users: User[] = [];
    userIdSelected = '';
    winners: Winner[] = [];
}
