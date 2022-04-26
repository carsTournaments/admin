import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionForOptionI } from 'src/app/interfaces/action-for-option.interface';
import { CarService, TournamentService, WinnerService } from 'src/app/services';
import { WinnerOnePageViewModel } from './model/winner-one.view-model';

@Component({
    selector: 'page-winner-one',
    templateUrl: 'winner-one.page.html',
})
export class WinnerOnePage implements OnInit {
    vm = new WinnerOnePageViewModel();
    constructor(
        private route: ActivatedRoute,
        private winnerService: WinnerService,
        private carService: CarService,
        private tournamentService: TournamentService,
        private router: Router
    ) {}

    ngOnInit() {
        this.vm.id = this.route.snapshot.paramMap.get('id') as string;
        this.getTournaments();
        this.getCars();
        if (this.vm.id) {
            this.vm.optionsTitle.title = 'Editar Ganadores';
            this.vm.edit = true;
            this.getOne();
        }
    }

    async getOne() {
        this.winnerService.getOne(this.vm.id).subscribe({
            next: (item) => {
                this.vm.item = item;
                this.vm.gold = item.gold._id;
                this.vm.silver = item.silver._id;
                this.vm.bronze = item.bronze._id;
                this.vm.tournament = item.tournament._id;
            },
            error: (error) => console.error(error),
        });
    }

    async getTournaments() {
        this.tournamentService.getAll(this.vm.bodyTournaments).subscribe({
            next: (response) => (this.vm.tournaments = response.items),
            error: (error) => console.error(error),
        });
    }

    async getCars() {
        this.carService.getAll(this.vm.bodyCars).subscribe({
            next: (response) => (this.vm.cars = response.items),
            error: (error) => console.error(error),
        });
    }

    async onSubmit() {
        this.vm.item.gold = this.vm.gold;
        this.vm.item.silver = this.vm.silver;
        this.vm.item.bronze = this.vm.bronze;
        this.vm.item.tournament = this.vm.tournament;
        this.winnerService.update(this.vm.item).subscribe({
            next: () => this.router.navigate(['/winners']),
            error: (error) => console.error(error),
        });
    }

    actionForOption(option: ActionForOptionI) {
        if (option.value === 'deleteOne') {
            this.deleteOne();
        }
    }

    async deleteOne() {
        if (confirm('¿Está seguro de eliminar este registro?')) {
            this.winnerService.deleteOne(this.vm.id).subscribe({
                next: () => this.router.navigate(['/winners']),
                error: (error) => console.error(error),
            });
        }
    }
}
