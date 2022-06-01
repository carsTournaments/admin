import { OptionItemI } from '@interfaces/option-item.interface';
import { Toggle } from '@models';

export class TogglesOnePageViewModel {
    id!: string;
    item: Toggle = new Toggle();
    title = '';
    edit = false;
    options: OptionItemI[] = [
        {
            name: 'Eliminar toggle',
            value: 'delete',
            disabled: false,
        },
    ];
}
