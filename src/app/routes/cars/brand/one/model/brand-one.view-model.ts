import { CustomTable2OptionsModel } from '@components/custom-table2/models/custom-table2.options-model';
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
    carsOptionsTable = new CustomTable2OptionsModel({
        loading: false,
        items: [],
        type: 'cars',
        showLoadMore: true,
    });
}
