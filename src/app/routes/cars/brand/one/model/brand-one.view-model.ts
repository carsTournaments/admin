import { CustomTableOptionsModel } from '@components/custom-table/model/custom-table.options-model';
import { Brand } from '@models/brand.model';

export class BrandOnePageViewModel {
    id!: string;
    item: Brand = new Brand();
    title = '';
    edit = false;
    options = [
        {
            name: 'Eliminar',
            value: 'delete',
        },
    ];
    carsOptionsTable = new CustomTableOptionsModel({
        loading: false,
        items: [],
        type: 'car',
        showLoadMore: true,
        error: false,
    });
}
