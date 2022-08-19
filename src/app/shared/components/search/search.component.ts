import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'search',
    templateUrl: 'search.component.html',
})
export class SearchComponent {
    search!: string;
    @Output() onEnterKey = new EventEmitter<string>();

    onKeyUpSearch(event: any) {
        if (event.keyCode === 13) {
            this.onEnterKey.emit(this.search);
        }
    }
}
