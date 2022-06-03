import { CustomTableOptionsModel } from '@components/custom-table/models/custom-table.options-model';

export class ToggleListViewModel {
    title = 'Toggles';
    optionsTable = new CustomTableOptionsModel({
        type: 'toggles',
        items: [],
        loading: true,
        showLoadMore: true,
    });
    options = [
        {
            name: 'Eliminar todos los toggles',
            value: 'deleteAll',
        },
    ];
    segmentSelected = 0;
}
