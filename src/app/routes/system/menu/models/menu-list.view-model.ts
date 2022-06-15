import { CustomTableOptionsModel } from '@components/custom-table/models/custom-table.options-model';

export class MenuListViewModel {
    title = 'Menu';
    optionsTable = new CustomTableOptionsModel({
        type: 'menu',
        items: [],
        loading: true,
        showLoadMore: true,
    });
}
