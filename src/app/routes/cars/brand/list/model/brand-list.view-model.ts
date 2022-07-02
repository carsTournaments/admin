import { CustomTableOptionsModel } from '@components/custom-table/models/custom-table.options-model';
import { User } from '@models';
import { BrandGetAllDto } from '@services/api/brand/brand.dto';

export class BrandListViewModel {
    items: User[] = [];
    title = 'Marcas';
    optionsTable = new CustomTableOptionsModel({
        type: 'brands',
        items: [],
        loading: true,
        showLoadMore: true,
    });
    options = [
        {
            name: 'Actualizar imagenes por defecto',
            value: 'updateBrandImagesWithJsonFile',
        },
    ];
    brandBody: BrandGetAllDto = {
        page: 1,
        pageSize: 20,
        order: ['name', 'asc'],
        site: 'admin',
    };
}
