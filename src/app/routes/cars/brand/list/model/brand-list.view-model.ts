import { CustomTable2OptionsModel } from '@components/custom-table2/models/custom-table2.options-model';
import { User } from '@models';
import { BrandGetAllDto } from '@services/api/brand/brand.dto';

export class BrandListViewModel {
    items: User[] = [];
    title = 'Marcas';
    optionsTable = new CustomTable2OptionsModel({
        type: 'brands',
        items: [],
        loading: true,
        showLoadMore: true,
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
