export interface MenuChildrenItem {
    route: string;
    name: string;
    type: 'link' | 'linkSecondary' | 'sub' | 'extLink' | 'extTabLink';
    children?: MenuChildrenItem[];
    position: number;
}

export class Menu {
    _id?: string;
    route = '';
    name = '';
    type: 'link' | 'sub' | 'extLink' | 'extTabLink' = 'link';
    icon? = '';
    children?: Menu[] = [];
    position = 0;

    constructor(data?: Menu) {
        this._id = data?._id;
        this.route = data?.route || this.route;
        this.name = data?.name || this.name;
        this.type = data?.type || this.type;
        this.icon = data?.icon || this.icon;
        this.children = data?.children || this.children;
        this.position = data?.position || this.position;
    }
}
