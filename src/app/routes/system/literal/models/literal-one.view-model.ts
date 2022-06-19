import { OptionItemI } from '@interfaces/option-item.interface';
import { Literal } from '@models';

export class LiteralOnePageViewModel {
    id!: string;
    item: Literal = new Literal();
    title = '';
    edit = false;
    state = 'false';
    options: OptionItemI[] = [
        {
            name: 'Eliminar literal',
            value: 'delete',
            disabled: false,
        },
    ];
}
