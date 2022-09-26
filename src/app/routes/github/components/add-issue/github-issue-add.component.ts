import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GithubIssue } from '@models';
import { GithubService, SnackBarService } from '@services';

@Component({
    selector: 'github-issue-add',
    templateUrl: 'github-issue-add.component.html',
})
export class GithubIssueAddComponent implements OnInit {
    item = new GithubIssue();
    repos = ['admin', 'app', 'backend'];
    repoSelected = 'admin';
    labels = '';
    @Output() carCreated = new EventEmitter();

    constructor(
        private githubService: GithubService,
        private snackBarService: SnackBarService
    ) {}

    ngOnInit() {
        this.item.owner = 'carsTournaments';
        this.item.assignees = ['josexs'];
    }

    onSubmit() {
        this.item.repo = this.repoSelected;
        this.item.labels = [];
        if (this.labels.indexOf(', ') !== -1) {
            this.item.labels = this.labels.split(', ');
        } else {
            this.item.labels = [this.labels];
        }
        console.log(this.repoSelected);
        this.githubService.create(this.item).subscribe({
            next: (response) => this.snackBarService.open(response.message),
            error: (error) => {
                console.log(error);
                this.snackBarService.open(error);
            },
        });
    }
}
