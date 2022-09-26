import { SettingsAndroidI, SettingsI, SettingsIosI } from '@interfaces';

export class Settings implements SettingsI {
    _id?: string;
    title?: string;
    description?: string;
    logo?: string;
    android?: SettingsAndroidI;
    ios?: SettingsIosI;
    state?: {
        admob: boolean;
        ota: boolean;
    };
    updated?: Date;
    constructor(data?: Settings) {
        this.title = data?.title;
        this.description = data?.description;
        this.logo = data?.logo;
        this.android = data?.android;
        this.ios = data?.ios;
        this.state = data?.state;
        this.updated = data?.updated;
    }
}
