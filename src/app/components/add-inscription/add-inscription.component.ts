import { Component } from '@angular/core';
import { AddInscriptionViewModel } from './add-inscription.view-model';

@Component({
    selector: 'add-inscription',
    templateUrl: 'add-inscription.component.html'
})

export class AddInscriptionComponent {
    vm = new AddInscriptionViewModel();
    constructor() { }


    createInscription() { }

    searchTournament(event: any) {
        if (event.keyCode === 13) {
            console.log(event);
        }
    }
}