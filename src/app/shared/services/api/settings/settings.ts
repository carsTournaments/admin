export interface AppSettings {
    navPos: 'side' | 'top';
    showHeader: boolean;
    headerPos: 'fixed' | 'static' | 'above';
    showUserPanel: boolean;
    sidenavOpened: boolean;
    sidenavCollapsed: boolean;
    theme: 'light' | 'dark';
}

export const defaults: AppSettings = {
    navPos: 'side',
    showHeader: true,
    headerPos: 'fixed',
    showUserPanel: false,
    sidenavOpened: true,
    sidenavCollapsed: false,
    theme: 'dark',
};
