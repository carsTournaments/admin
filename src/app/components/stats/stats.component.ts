import { Component, Input } from '@angular/core';
import { StatsOptionsModel } from './models/stats.options-model';

@Component({
  selector: 'stats',
  templateUrl: 'stats.component.html',
})
export class StatsComponent {
  @Input() options = new StatsOptionsModel();
}
