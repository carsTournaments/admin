import { CustomTableOptionsModel } from 'src/app/components/custom-table/model/custom-table.options-model';
import { CustomTitleWithButtonsViewModel } from 'src/app/components/custom-title-with-buttons/model/custom-title-with-buttons.view-model';
import { Brand } from 'src/app/models/brand.model';

export class BrandOnePageViewModel {
    id!: string;
    item: Brand = new Brand();
    optionsTitle = new CustomTitleWithButtonsViewModel({
        title: '',
        buttons: [],
    });
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
