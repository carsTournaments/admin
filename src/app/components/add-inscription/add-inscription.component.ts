import { Component } from '@angular/core';
import { AddInscriptionViewModel } from './add-inscription.view-model';

@Component({
  selector: 'add-inscription',
  templateUrl: 'add-inscription.component.html',
})
export class AddInscriptionComponent {
  vm = new AddInscriptionViewModel();

    createInscription() {
      // todo: create inscription
  }

  searchTournament(event: any) {
    if (event.keyCode === 13) {
      console.log(event);
    }
  }
}
