import { Component, OnInit } from '@angular/core';
import { GithubService, SnackBarService } from '@services';
import { GithubActionI } from '@services/api/github/github-action.interface';
import { GithubListViewModel } from '../../models/github-list.view-model';

@Component({
    selector: 'github-action-list',
    templateUrl: 'github-action-list.page.html',
})
export class GithubActionListPage implements OnInit {
    vm = new GithubListViewModel();
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
                this.vm.actionsOptionsTable.items = response;
                this.vm.actionsOptionsTable.loading = false;
                console.log(this.vm.actionsOptionsTable);
            },
            error: (error) => this.snackBarService.open(error),
        });
    }

    openLink(event: { rowData: GithubActionI }) {
        console.log(event);
        window.open(event.rowData.url, '_blank');
    }
}
