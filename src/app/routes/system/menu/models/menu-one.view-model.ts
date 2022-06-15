import { Menu } from '@models';

export class MenuOnePageViewModel {
    id!: string;
    edit = false;
    item: Menu = new Menu();
    title = '';
}
