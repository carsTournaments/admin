import { Component, OnInit } from '@angular/core';
import { CustomTableOptionsModel } from '@components/custom-table/models/custom-table.options-model';
import { GithubService, SnackBarService } from '@services';
import { GithubActionI } from '@services/api/github/github-action.interface';

@Component({
    selector: 'dashboard-actions',
    templateUrl: 'dashboard-actions.component.html',
})
export class DashboardActionsComponent implements OnInit {
    optionsTable = new CustomTableOptionsModel({
        type: 'githubActionsDashboard',
        items: [],
        loading: true,
        showLoadMore: true,
    });

    constructor(
        private githubService: GithubService,
        private snackBarService: SnackBarService
    ) {}

    ngOnInit() {
        this.getActions();
    }

    getActions() {
        this.githubService.getAllActions().subscribe({
            next: (response) => {
                this.optionsTable.items = response;
                this.optionsTable.loading = false;
            },
            error: (error) => this.snackBarService.open(error),
        });
    }

    openLink(event: { rowData: GithubActionI }) {
        window.open(event.rowData.url, '_blank');
    }
}
