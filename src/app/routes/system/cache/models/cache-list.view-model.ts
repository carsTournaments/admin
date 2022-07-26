import { CustomTableOptionsModel } from '@components/custom-table/models/custom-table.options-model';

export class CacheListViewModel {
    title = 'Cache';
    optionsTable = new CustomTableOptionsModel({
        type: 'cache',
        items: [],
        loading: true,
        showLoadMore: true,
    });
    segmentSelected = 0;
    options = [
        {
            name: 'Elimintar toda la cache',
            value: 'deleteAll',
        },
    ];
}
