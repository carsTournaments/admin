import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Car } from '@models';
import {
    AuthService,
    SnackBarService,
    UserService,
    VoteService,
} from '@services';
import { VoteCreateDto } from '@services/api/vote/dtos/vote.dto';

@Component({
    selector: 'vote-new',
    templateUrl: 'vote-new.component.html',
})
export class VoteNewComponent implements OnInit {
    car1!: Car;
    car2!: Car;
    round!: string;
    tournament!: string;
    pairing!: string;
    carIdSelected = '';

    constructor(
        public dialogRef: MatDialogRef<any>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private voteService: VoteService,
        private snackBarService: SnackBarService,
        private userService: UserService
    ) {}

    ngOnInit() {
        this.car1 = this.data.car1;
        this.car2 = this.data.car2;
        this.round = this.data.round;
        this.tournament = this.data.tournament;
        this.pairing = this.data.pairing;
    }

    createVote() {
        const user = this.userService.getUser();
        const body: VoteCreateDto = {
            car: this.carIdSelected!,
            pairing: this.pairing!,
            round: this.round!,
            tournament: this.tournament!,
            user: user._id!,
        };
        this.voteService.create(body).subscribe({
            next: () => {
                this.snackBarService.open('Voto creado correctamente');
                this.dialogRef.close({});
            },
            error: (err) => this.snackBarService.open(err),
        });
    }
}
