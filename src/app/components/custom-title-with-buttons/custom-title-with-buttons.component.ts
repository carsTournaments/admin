import { Component, Input } from '@angular/core';
import { CustomTitleWithButtonsViewModel } from './model/custom-title-with-buttons.view-model';

@Component({
    selector: 'custom-title-with-buttons',
    templateUrl: 'custom-title-with-buttons.component.html',
    styleUrls: ['./custom-title-with-buttons.component.scss'],
})
export class CustomTitleWithButtonsComponent {
    @Input() options = new CustomTitleWithButtonsViewModel();
}
