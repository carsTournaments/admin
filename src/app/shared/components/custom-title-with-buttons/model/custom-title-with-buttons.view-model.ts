export class CustomTitleWithButtonsViewModel {
    title = '';
    subtitle?: string;
    buttons?: {
        name: string;
        link?: string;
        separated?: boolean;
        click?: string;
    }[] = [];
    constructor(data?: CustomTitleWithButtonsViewModel) {
        if (data) {
            this.title = data.title ?? this.title;
            this.buttons = data.buttons ?? [];
            this.subtitle = data.subtitle ?? this.subtitle;
        }
    }
}
