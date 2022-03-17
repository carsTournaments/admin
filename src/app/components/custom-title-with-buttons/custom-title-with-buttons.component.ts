import { Component, Input } from '@angular/core';
import { CustomTitleWithButtonsViewModel } from './model/custom-title-with-buttons.view-model';

@Component({
  selector: 'custom-title-with-buttons',
  templateUrl: 'custom-title-with-buttons.component.html',
})
export class CustomTitleWithButtonsComponent {
  @Input() options = new CustomTitleWithButtonsViewModel();
}
