export interface SettingsI {
    _id?: string;
    title?: string;
    description?: string;
    logo?: string;
    android?: SettingsAndroidI;
    ios?: SettingsIosI;
    created?: Date;
    updated?: Date;
}

export interface SettingsAndroidI {
    version: SettingsVersionI;
    urlMarket: string;
}

export interface SettingsIosI {
    version: SettingsVersionI;
    urlMarket: string;
}

export interface SettingsVersionI {
    latestVersion: string;
    minVersion: string;
}

export interface SettingsVersionCodeI {
    versionMajor: number;
    versionMinor: number;
    versionPatch: number;
}

export interface SettingsCheckUpdateI {
    update: boolean;
    mandatory: boolean;
}
