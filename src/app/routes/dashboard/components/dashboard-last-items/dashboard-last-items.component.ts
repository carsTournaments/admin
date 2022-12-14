import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomTableOptionsModel } from '@components/custom-table/models/custom-table.options-model';
import { CarService, TournamentService, UserService } from '@services';

@Component({
    selector: 'dashboard-last-items',
    templateUrl: 'dashboard-last-items.component.html',
})
export class DashboardLastItemsComponent {
    optionsTableCars = new CustomTableOptionsModel({
        type: 'carsDashboard',
        items: [],
        loading: true,
        showLoadMore: false,
    });
    optionsTableTournaments = new CustomTableOptionsModel({
        type: 'tournamentsDashboard',
        items: [],
        loading: true,
        showLoadMore: false,
    });
    optionsTableUsers = new CustomTableOptionsModel({
        type: 'usersDashboard',
        items: [],
        loading: true,
        showLoadMore: false,
    });
    constructor(
        private carService: CarService,
        private tournamentService: TournamentService,
        private userService: UserService,
        private router: Router
    ) {}

    ngOnInit() {
        this.getItems();
    }

    getItems() {
        const body: any = {
            page: 1,
            pageSize: 5,
            site: 'admin',
            order: ['created', 'desc'],
            onlyWithPhoto: false,
        };
        this.carService.getAll(body).subscribe((response) => {
            this.optionsTableCars.items = response.items;
            this.optionsTableCars.loading = false;
        });
        this.tournamentService.getAll(body).subscribe((response) => {
            this.optionsTableTournaments.items = response.items;
            this.optionsTableTournaments.loading = false;
        });
        this.userService.getAll(body).subscribe((response) => {
            this.optionsTableUsers.items = response.items;
            this.optionsTableUsers.loading = false;
        });
    }

    onRowClick(type: string, item: any) {
        this.router.navigate([`/${type}/one/${item.rowData._id}`]);
    }
}
