import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionForOptionI } from 'src/app/interfaces/action-for-option.interface';
import {
    AlertService,
    BrandService,
    CarService,
    InscriptionService,
    LikeService,
    ReportService,
    SnackBarService,
    UserService,
    VoteService,
    WinnerService,
} from 'src/app/services';
import { CarOnePageViewModel } from './model/car-one.view-model';
import { Report } from 'src/app/models/report.model';
import { Like, User } from 'src/app/models';

@Component({
    selector: 'page-car-one',
    templateUrl: 'car-one.page.html',
})
export class CarOnePage implements OnInit {
    vm = new CarOnePageViewModel();
    constructor(
        private route: ActivatedRoute,
        private carService: CarService,
        private brandService: BrandService,
        private userService: UserService,
        private voteService: VoteService,
        private winnerService: WinnerService,
        private inscriptionService: InscriptionService,
        private likeService: LikeService,
        private reportService: ReportService,
        private router: Router,
        private alertService: AlertService,
        private snackBarService: SnackBarService
    ) {}

    ngOnInit() {
        this.vm.id = this.route.snapshot.paramMap.get('id') as string;
        this.getAllBrands();
        this.getAllDrivers();
        this.getAllWinners();
        if (this.vm.id) {
            this.vm.optionsTitle.title = 'Editar Coche';
            this.vm.edit = true;
            this.getInscriptionsByCar();
            this.getVotesByCar();
            this.getLikesReceivedByCar();
            this.getOne();
        } else {
            this.vm.optionsTitle.title = 'Nuevo Coche';
            this.vm.edit = false;
        }
    }

    async getOne() {
        this.carService.getOne(this.vm.id).subscribe({
            next: (item) => {
                this.vm.item = item;
                this.vm.stock = this.vm.item.stock;
                this.vm.brandIdSelected = item.brand._id;
                this.vm.userIdSelected = item.driver._id;
                this.vm.optionsTitle.subtitle = `${item.brand.name} ${item.model}`;
            },
            error: (error) => console.error(error),
        });
    }

    getAllDrivers() {
        this.userService.getAll(this.vm.bodyUsers).subscribe({
            next: (result) => (this.vm.users = result.items),
            error: (e) => this.snackBarService.open(e),
        });
    }

    getAllWinners() {
        this.winnerService.getAll(this.vm.bodyWinners).subscribe({
            next: (result) => (this.vm.winners = result.items),
            error: (e) => this.snackBarService.open(e),
        });
    }

    getAllBrands() {
        this.brandService.getAll(this.vm.bodyBrands).subscribe({
            next: (result) => (this.vm.brands = result.items),
            error: (e) => this.snackBarService.open(e),
        });
    }

    getInscriptionsByCar() {
        this.inscriptionService.getAllOfCar({ id: this.vm.id }).subscribe({
            next: (items) => (this.vm.inscriptionsOptionsTable.items = items),
            error: (e) => this.snackBarService.open(e),
        });
    }

    getVotesByCar() {
        this.voteService
            .getAllOfCar({ id: this.vm.id, limit: '20' })
            .subscribe({
                next: (items) => (this.vm.votesOptionsTable.items = items),
                error: (e) => this.snackBarService.open(e),
            });
    }

    getLikesReceivedByCar() {
        this.likeService.getAllReceivedForCar({ id: this.vm.id }).subscribe({
            next: (items) => (this.vm.likesReceivedOptionsTable.items = items),
            error: (e) => this.snackBarService.open(e),
        });
    }

    async onSubmit() {
        try {
            this.vm.item.brand = this.vm.brandIdSelected;
            this.vm.item.driver = this.vm.userIdSelected;
            this.vm.item.stock = Boolean(this.vm.stock);
            this.vm.edit
                ? this.carService.update(this.vm.item).subscribe(() => {
                      this.snackBarService.open('Coche editado');
                      this.router.navigate(['/cars']);
                  })
                : this.carService.create(this.vm.item).subscribe(() => {
                      this.snackBarService.open('Coche creado');
                      this.router.navigate(['/cars']);
                  });
        } catch (error) {
            this.snackBarService.open('Error al dar guardar el coche');
            console.error(error);
        }
    }

    actionForOption(option: ActionForOptionI) {
        switch (option.value) {
            case 'like':
                this.likeCar();
                break;
            case 'report':
                this.reportCar();
                break;
            case 'deleteInscriptions':
                this.deleteInscriptions();
                break;
            case 'delete':
                this.deleteOne();
                break;
            default:
                break;
        }
    }

    likeCar() {
        try {
            const like: Like = {
                car: this.vm.id,
            };
            this.likeService.create(like).subscribe({
                next: () => this.snackBarService.open('Like añadido'),
                error: (e) => this.snackBarService.open(e),
            });
        } catch (error) {
            this.snackBarService.open('Error al dar Like');
        }
    }

    reportCar() {
        const userString: string | null = localStorage.getItem('user');
        if (userString) {
            const reason = prompt('Indica el motivo del reporte');
            if (reason) {
                const user = JSON.parse(userString) as User;
                const report: Report = {
                    carReported: this.vm.id,
                    userReported: this.vm.item.driver._id,
                    userReporter: user._id,
                    reason,
                    state: true,
                };
                this.reportService.create(report).subscribe({
                    next: () =>
                        this.snackBarService.open(
                            'Reporte creado correctamente'
                        ),
                    error: (e) => this.snackBarService.open(e),
                });
            }
        }
    }

    async deleteInscriptions() {
        if (confirm('¿Estás seguro de eliminar todas las inscripciones?')) {
            this.vm.inscriptionsOptionsTable.loading = true;
            this.inscriptionService.deleteAllOfCar(this.vm.id).subscribe({
                next: () => {
                    this.vm.inscriptionsOptionsTable.loading = false;
                    this.vm.inscriptionsOptionsTable.items = [];
                },
                error: (e) => {
                    this.vm.inscriptionsOptionsTable.loading = false;
                    this.snackBarService.open(e);
                },
            });
        }
    }

    async deleteOne() {
        if (confirm('¿Está seguro de eliminar el coche?')) {
            this.carService.delete(this.vm.id).subscribe({
                next: () => {
                    alert('Coche eliminado');
                    this.snackBarService.open('Coche eliminado');
                    this.router.navigate(['/cars']);
                },
                error: (e) => alert(e),
            });
        }
    }

    onInscription() {
        this.getInscriptionsByCar();
    }

    onDeleteInscription(id: string) {
        if (confirm('¿Está seguro de eliminar la inscripcion?')) {
            this.inscriptionService.deleteOne(id).subscribe({
                next: () => this.getInscriptionsByCar(),
                error: (e) => this.snackBarService.open(e),
            });
        }
    }
}
