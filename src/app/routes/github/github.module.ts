import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { GithubIssueListPage } from './pages/issue-list/github-issue-list.page';
import { GithubActionListPage } from './pages/action-list/github-action-list.page';
import { GithubIssueAddComponent } from './components/add-issue/github-issue-add.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: 'issues',
                component: GithubIssueListPage,
                data: {
                    breadcrumb: 'Issues',
                    title: 'Issues',
                },
            },
            {
                path: 'actions',
                component: GithubActionListPage,
                data: {
                    breadcrumb: 'Actions',
                    title: 'Actions',
                },
            },
            { path: '**', redirectTo: 'issues' },
        ]),
    ],
    declarations: [
        GithubIssueListPage,
        GithubActionListPage,
        GithubIssueAddComponent,
    ],
    providers: [],
})
export class GithubModule {}
