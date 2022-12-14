import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionForOptionI } from '@interfaces/action-for-option.interface';
import {
    AlertService,
    CarService,
    ImageService,
    InscriptionService,
    LikeService,
    ReportService,
    SnackBarService,
    VoteService,
    WinnerService,
} from '@services';
import { CarOnePageViewModel } from './model/car-one.view-model';
import { Report } from '@models/report.model';
import { Image, Inscription, Like, User } from '@models';

@Component({
    selector: 'page-car-one',
    templateUrl: 'car-one.page.html',
})
export class CarOnePage implements OnInit {
    vm = new CarOnePageViewModel();
    constructor(
        private route: ActivatedRoute,
        private carService: CarService,
        private voteService: VoteService,
        private winnerService: WinnerService,
        private inscriptionService: InscriptionService,
        private likeService: LikeService,
        private reportService: ReportService,
        private router: Router,
        private alertService: AlertService,
        private snackBarService: SnackBarService,
        private imageService: ImageService
    ) {}

    ngOnInit() {
        this.vm.id = this.route.snapshot.paramMap.get('id')!;
        this.getAllWinners();
        if (this.vm.id) {
            this.vm.edit = true;
            this.getAllInscriptions();
            this.getVotesByCar();
            this.getLikesReceivedByCar();
            this.getOne();
        } else {
            this.vm.title = 'Nuevo Coche';
            this.vm.edit = false;
        }
    }

    async getOne() {
        this.carService.getOne(this.vm.id).subscribe({
            next: (item) => {
                this.vm.item = item;
                this.vm.stock = this.vm.item.stock;
                this.vm.title = `${item.brand.name} ${item.model}`;
            },
            error: (error) => console.error(error),
        });
    }

    getAllWinners() {
        this.vm.bodyWinners.id = this.vm.id;
        this.winnerService.getAllCarWinners(this.vm.bodyWinners).subscribe({
            next: (result) => {
                this.vm.winnersOptionsTable.items = result;
                this.vm.winnersOptionsTable.loading = false;
            },
            error: (e) => this.snackBarService.open(e),
        });
    }

    getAllInscriptions() {
        this.vm.inscriptionsOptionsTable.loading = true;
        this.inscriptionService
            .getAllCarInscriptions({ id: this.vm.id, limit: '20' })
            .subscribe({
                next: (items) =>
                    (this.vm.inscriptionsOptionsTable.items = items),
                error: (e) => this.snackBarService.open(e),
            });
        this.vm.inscriptionsOptionsTable.loading = false;
    }

    getVotesByCar() {
        this.vm.votesOptionsTable.loading = true;
        this.voteService
            .getAllCarVotes({ id: this.vm.id, limit: '20' })
            .subscribe({
                next: (items) => (this.vm.votesOptionsTable.items = items),
                error: (e) => this.snackBarService.open(e),
            });
        this.vm.votesOptionsTable.loading = false;
    }

    getLikesReceivedByCar() {
        this.vm.likesReceivedOptionsTable.loading = true;
        this.likeService.getAllReceivedForCar({ id: this.vm.id }).subscribe({
            next: (items) => (this.vm.likesReceivedOptionsTable.items = items),
            error: (e) => this.snackBarService.open(e),
        });
        this.vm.likesReceivedOptionsTable.loading = false;
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
            this.likeService
                .createFake({ total: 1, carId: this.vm.id })
                .subscribe({
                    next: () => {
                        this.getLikesReceivedByCar();
                        this.snackBarService.open('Like a??adido correctamente');
                    },

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
        } else {
            this.snackBarService.open('No se ha detectado usuario');
        }
    }

    deleteInscriptions() {
        const alert = this.alertService.showConfirmation(
            'Eliminar todas las inscripciones',
            '??Est??s seguro de eliminar todas las inscripciones?'
        );
        alert.subscribe((data) => {
            if (data) {
                this.vm.inscriptionsOptionsTable.loading = true;
                this.inscriptionService.deleteAllOfCar(this.vm.id).subscribe({
                    next: () => {
                        this.vm.inscriptionsOptionsTable.loading = false;
                        this.vm.inscriptionsOptionsTable.items = [];
                    },
                    error: (e) => this.snackBarService.open(e),
                });
            }
        });
    }

    deleteOne() {
        const alert = this.alertService.showConfirmation(
            'Eliminar coche',
            '??Est?? seguro de eliminar el coche? Si el coche esta en otra tabla, la puedes liar'
        );
        alert.subscribe((data) => {
            if (data) {
                this.carService.delete(this.vm.id).subscribe({
                    next: () => {
                        this.snackBarService.open(
                            'Coche eliminado correctamente'
                        );
                        this.router.navigate(['/cars']);
                    },
                    error: (error) => this.snackBarService.open(error),
                });
            }
        });
    }

    onInscription() {
        this.getAllInscriptions();
    }

    onDeleteInscription(event: { rowData: Inscription }) {
        if (event.rowData.tournament.status === 'Todo') {
            const alert = this.alertService.showConfirmation(
                'Eliminar inscripci??n',
                '??Est?? seguro de eliminar la inscripcion?'
            );
            alert.subscribe((data) => {
                if (data) {
                    this.onDeleteInscriptionConfirmation(event.rowData);
                }
            });
        } else {
            this.snackBarService.open('No se puede eliminar la inscripcion');
        }
    }

    onDeleteInscriptionConfirmation(item: Inscription) {
        this.inscriptionService.deleteOne(item._id!).subscribe({
            next: () => this.getAllInscriptions(),
            error: (e) => this.snackBarService.open(e),
        });
    }

    onDeleteLike(event: { rowData: Like }) {
        const alert = this.alertService.showConfirmation(
            'Eliminar Like',
            '??Est?? seguro de eliminar el like?'
        );
        alert.subscribe((data) => {
            if (data) {
                this.onDeleteLikeConfirmation(event.rowData);
            }
        });
    }

    onDeleteLikeConfirmation(item: Like) {
        this.likeService.deleteOne(item._id!).subscribe({
            next: () => {
                this.snackBarService.open('Like eliminado correctamente');
                this.getLikesReceivedByCar();
            },
            error: (e) => this.snackBarService.open(e),
        });
    }

    onDeleteImage(image: Image) {
        const alert = this.alertService.showConfirmation(
            'Eliminar imagen',
            'Esta seguro de eliminar la imagen?'
        );
        alert.subscribe((data) => {
            if (data) {
                this.onDeleteImageConfirmation(image);
            }
        });
    }

    onDeleteImageConfirmation(image: Image) {
        this.imageService.deleteOne(image._id!).subscribe({
            next: () => {
                this.snackBarService.open('Imagen eliminada correctamente');
                this.getOne();
            },
            error: (e) => this.snackBarService.open(e),
        });
    }
}
