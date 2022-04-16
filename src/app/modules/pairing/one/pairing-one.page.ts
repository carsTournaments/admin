import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionForOptionI } from 'src/app/interfaces/action-for-option.interface';
import { Vote } from 'src/app/models/vote.model';
import { PairingService } from 'src/app/services/pairing/pairing.service';
import { VoteService } from 'src/app/services/vote/vote.service';
import { PairingOnePageViewModel } from './model/pairing-one.view-model';

@Component({
    selector: 'page-pairing-one',
    templateUrl: 'pairing-one.page.html',
})
export class PairingOnePage implements OnInit {
    vm = new PairingOnePageViewModel();
    constructor(
        private route: ActivatedRoute,
        private pairingService: PairingService,
        private voteService: VoteService,
        private router: Router
    ) {}

    ngOnInit() {
        this.vm.id = this.route.snapshot.paramMap.get('id') as string;
        if (this.vm.id) {
            this.vm.optionsTitle.title = 'Editar Emparejamiento';
            this.vm.edit = true;
            this.getOne();
        } else {
            this.vm.optionsTitle.title = 'Nuevo Emparejamiento';
            this.vm.edit = false;
        }
    }

    async getOne() {
        try {
            this.pairingService
                .getOne({ id: this.vm.id, site: 'admin' })
                .subscribe((item) => {
                    this.vm.item = item;
                });
        } catch (error) {
            console.error(error);
        }
    }

    async onSubmit() {
        try {
            this.vm.edit
                ? this.pairingService.update(this.vm.item).subscribe(() => {
                      this.router.navigate(['/pairings']);
                  })
                : this.pairingService.create(this.vm.item).subscribe(() => {
                      alert('Marca creada');
                      this.router.navigate(['/pairings']);
                  });
        } catch (error) {
            console.error(error);
        }
    }

    actionForOption(option: ActionForOptionI) {
        switch (option.value) {
            case 'voteCar1':
                this.createVote('car1');
                break;
            case 'voteCar2':
                this.createVote('car2');
                break;
            default:
                break;
        }
    }

    createVote(carNumber: string) {
        const car: string =
            carNumber === 'car1' ? this.vm.item.car1 : this.vm.item.car2;
        const body: Vote = {
            car,
            round: this.vm.item.round,
            tournament: this.vm.item.tournament,
            pairing: this.vm.id,
        };
        this.voteService.create(body).subscribe({
            next: () => alert('Voto creado'),
            error: (error) => alert(error),
        });
    }
}
