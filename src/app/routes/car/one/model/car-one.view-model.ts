import { Winner } from '@models/winner.model';
import { CustomTableOptionsModel } from '@components/custom-table/model/custom-table.options-model';
import { Car } from '@models/car.model';
import { Brand } from '@models/brand.model';
import { User } from '@models';
import { BrandGetAllDto } from '@services/api/brand/brand.dto';
import { UserGetAllDto } from '@services/api/user/dtos/user.dto';
import { WinnerGetAllDto } from '@services/api/winner/winner.dto';

export class CarOnePageViewModel {
    id!: string;
    item: Car = new Car();
    title = '';
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
    likesReceivedOptionsTable = new CustomTableOptionsModel({
        loading: false,
        items: [],
        type: 'like',
        showLoadMore: true,
        error: false,
    });
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
