import { CustomTableOptionsModel } from '@components/custom-table/model/custom-table.options-model';
import { CustomTitleWithButtonsViewModel } from '@components/custom-title-with-buttons/model/custom-title-with-buttons.view-model';
import { User } from '@models';
import { BrandGetAllDto } from '@services/api/brand/brand.dto';

export class BrandListViewModel {
    items: User[] = [];
    optionsTitle = new CustomTitleWithButtonsViewModel({
        title: 'Marcas',
        buttons: [{ name: 'Nuevo', link: '/brands/one', separated: false }],
    });
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
