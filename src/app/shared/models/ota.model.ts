export class Ota {
    platform: string;
    version: string;
    url: string;

    constructor(data?: Ota) {
        this.platform = data?.platform || '';
        this.version = data?.version || '';
        this.url = data?.url || '';
    }
}
