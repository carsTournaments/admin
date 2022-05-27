import { Router } from '@angular/router';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CustomTitleWithButtonsViewModel } from './model/custom-title-with-buttons.view-model';

@Component({
    selector: 'custom-title-with-buttons',
    templateUrl: 'custom-title-with-buttons.component.html',
    styleUrls: ['./custom-title-with-buttons.component.scss'],
})
export class CustomTitleWithButtonsComponent {
    @Input() options = new CustomTitleWithButtonsViewModel();
    @Output() clickItem = new EventEmitter<any>();

    constructor(private router: Router) {}

    checkClickOrLink(item: any) {
        if (item.click) {
            this.clickItem.emit(item);
        } else if (item.link) {
            this.router.navigate([item.link]);
        }
    }
}
