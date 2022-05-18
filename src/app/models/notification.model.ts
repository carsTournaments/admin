export class Notification {
    _id?: string;
    users: string[];
    fcms: string[];
    title: string;
    message: string;
    link?: string;

    constructor(data?: Notification) {
        this._id = data?._id;
        this.users = data?.users || [];
        this.fcms = data?.fcms || [];
        this.title = data?.title || '';
        this.message = data?.message || '';
        this.link = data?.link;
    }
}
