import { Winner } from 'src/app/models/winner.model';
import { CustomTableOptionsModel } from 'src/app/components/custom-table/model/custom-table.options-model';
import { CustomTitleWithButtonsViewModel } from 'src/app/components/custom-title-with-buttons/model/custom-title-with-buttons.view-model';
import { Car } from 'src/app/models/car.model';
import { Brand } from 'src/app/models/brand.model';
import { User } from 'src/app/models/user.model';
import { BrandGetAllDto } from 'src/app/services/api/brand/brand.dto';
import { UserGetAllDto } from 'src/app/services/api/user/dtos/user.dto';
import { WinnerGetAllDto } from 'src/app/services/api/winner/winner.dto';

export class CarOnePageViewModel {
    id!: string;
    item: Car = new Car();
    optionsTitle = new CustomTitleWithButtonsViewModel({
        title: '',
        buttons: [],
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
