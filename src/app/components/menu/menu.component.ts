import { MenuViewModel } from './menu.view-model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() itemSelected = 0;
  vm = new MenuViewModel();
}
