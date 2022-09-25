import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { GithubListPage } from './pages/github-list.page';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: '',
                component: GithubListPage,
                data: {
                    breadcrumb: '',
                    title: 'Github',
                },
            },
            { path: '**', redirectTo: '' },
        ]),
    ],
    declarations: [GithubListPage],
    providers: [],
})
export class GithubModule {}
