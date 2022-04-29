import {
    SettingsAndroidI,
    SettingsI,
    SettingsIosI,
} from '../interfaces/settings.interface';

export class Settings implements SettingsI {
    _id?: string;
    title?: string;
    description?: string;
    logo?: string;
    android?: SettingsAndroidI;
    ios?: SettingsIosI;
    updated?: Date;
    constructor(data?: Settings) {
        this.title = data?.title;
        this.description = data?.description;
        this.logo = data?.logo;
        this.android = data?.android;
        this.ios = data?.ios;
        this.updated = data?.updated;
    }
}
