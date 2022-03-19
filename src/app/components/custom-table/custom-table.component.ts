import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CustomTableOptionsModel } from './model/custom-table.options-model';
import { CustomTableViewModel } from './model/custom-table.view.model';

@Component({
  selector: 'custom-table',
  templateUrl: 'custom-table.component.html',
  styleUrls: ['custom-table.component.scss'],
})
export class CustomTableComponent {
  @Input() options = new CustomTableOptionsModel();
  vm = new CustomTableViewModel();
  @Output() changeOrder = new EventEmitter<string>();
  @Output() changePage = new EventEmitter();

  openImage(image: string) {
    window.open(image, '_blank');
  }

  onChangeOrder(order: string | null): void {
    if (order) {
      this.changeOrder.emit(order);
    }
  }
}
