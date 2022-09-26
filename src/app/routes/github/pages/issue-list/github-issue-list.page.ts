import { Component, OnInit } from '@angular/core';
import { GithubService, SnackBarService } from '@services';
import { GithubIssueListItemI } from '@services/api/github/github-issue.interface';
import { GithubListViewModel } from '../../models/github-list.view-model';

@Component({
    selector: 'github-issue-list',
    templateUrl: 'github-issue-list.page.html',
})
export class GithubIssueListPage implements OnInit {
    vm = new GithubListViewModel();
    constructor(
        private githubService: GithubService,
        private snackBarService: SnackBarService
    ) {}

    ngOnInit() {
        this.getIssues();
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

    openLink(event: { rowData: GithubIssueListItemI }) {
        console.log(event);
        window.open(event.rowData.url, '_blank');
    }
}
