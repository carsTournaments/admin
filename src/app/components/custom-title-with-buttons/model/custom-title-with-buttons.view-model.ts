export class CustomTitleWithButtonsViewModel {
    title = '';
    buttons: { name: string; link: string; separated: boolean }[] = [];
    constructor(data?: CustomTitleWithButtonsViewModel) {
        if (data) {
            this.title = data.title ?? this.title;
            this.buttons = data.buttons ?? this.buttons;
        }
    }
}
