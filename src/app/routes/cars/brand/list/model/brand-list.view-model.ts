import { CustomTableOptionsModel } from '@components/custom-table/model/custom-table.options-model';
import { User } from '@models';
import { BrandGetAllDto } from '@services/api/brand/brand.dto';

export class BrandListViewModel {
    items: User[] = [];
    title = 'Marcas';
    optionsTable = new CustomTableOptionsModel({
        loading: false,
        items: [],
        type: 'brand',
        showLoadMore: true,
        error: false,
    });
    options = [
        {
            name: 'Prueba',
            value: '',
        },
    ];
    brandBody: BrandGetAllDto = {
        page: 1,
        pageSize: 20,
        order: ['name', 'asc'],
        site: 'admin',
    };
}
