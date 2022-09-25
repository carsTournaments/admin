import { Component, OnInit } from '@angular/core';
import { GithubService, SnackBarService } from '@services';
import { GithubListViewModel } from '../models/github-list.view-model';
import { GithubIssueI } from '../../../../../../backend/src/modules/github/issue/github-issue.interface';
import { GithubActionI } from '../../../../../../backend/src/modules/github/action/github-action.interface';

@Component({
    selector: 'github-list',
    templateUrl: 'github-list.page.html',
})
export class GithubListPage implements OnInit {
    vm = new GithubListViewModel();
    constructor(
        private githubService: GithubService,
        private snackBarService: SnackBarService
    ) {}

    ngOnInit() {
        this.getIssues();
        this.getActions();
    }

    getIssues() {
        this.githubService.getAllIssues().subscribe({
            next: (response) => {
                this.vm.issuesOptionsTable.items = response;
                this.vm.issuesOptionsTable.loading = false;
                console.log(this.vm.issuesOptionsTable);
            },
            error: (error) => this.snackBarService.open(error),
        });
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

    openLink(event: { rowData: GithubIssueI | GithubActionI }) {
        console.log(event);
        window.open(event.rowData.url, '_blank');
    }
}
