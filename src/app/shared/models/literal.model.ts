export class Literal {
    _id?: string;
    name: string;
    category: string;
    es?: string;
    en?: string;

    created?: string;
    updated?: string;
    constructor(data?: Literal) {
        this._id = data?._id;
        this.name = data?.name ?? '';
        this.category = data?.category ?? '';
        this.es = data?.es;
        this.en = data?.en;
        this.created = data?.created;
        this.updated = data?.updated;
    }
}
