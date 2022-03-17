import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: 'search.component.html',
})
export class SearchComponent {
  value!: string;
  @Output() onSearch = new EventEmitter<string>();
}
