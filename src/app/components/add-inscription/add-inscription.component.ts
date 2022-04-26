import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchService, InscriptionService } from 'src/app/services';
import { AddInscriptionViewModel } from './add-inscription.view-model';

@Component({
    selector: 'add-inscription',
    templateUrl: 'add-inscription.component.html',
})
export class AddInscriptionComponent {
    @Input() carId!: string;
    @Output() onInscription: EventEmitter<void> = new EventEmitter();
    vm = new AddInscriptionViewModel();

    constructor(
        private searchService: SearchService,
        private inscriptionService: InscriptionService
    ) {}

    createInscription() {
        this.inscriptionService.create(this.vm.body).subscribe({
            next: () => {
                alert('Inscripción creada');
                this.onInscription.emit();
            },
            error: (error) => alert(error),
        });
    }

    searchTournament(event: any) {
        if (event.keyCode === 13) {
            this.searchService
                .getAll({
                    type: 'tournament',
                    value: event.target.value,
                })
                .subscribe({
                    next: (data) => (this.vm.results = data),
                    error: (err) => console.error(err),
                });
        }
    }

    selectTournament(id: string) {
        this.vm.body = {
            tournament: id,
            car: this.carId,
        };
        this.vm.disabledButton = false;
    }
}
