import { SearchService } from './../../services/search/search.service';
import { Component } from '@angular/core';
import { AddInscriptionViewModel } from './add-inscription.view-model';

@Component({
  selector: 'add-inscription',
  templateUrl: 'add-inscription.component.html',
})
export class AddInscriptionComponent {
  vm = new AddInscriptionViewModel();

  constructor(private searchService: SearchService) { }

  createInscription() {
    // todo: create inscription
  }

  searchTournament(event: any) {
    if (event.keyCode === 13) {
      console.log(event);
      this.searchService.getAll({
        type: 'tournament',
        value: event.target.value,
      }).subscribe({
        next: (data) => this.vm.results = data,
        error: (err) => console.error(err)
      })
    }
  }

  selectTournament(id: string) {}
}
