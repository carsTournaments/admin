import { CustomTableOptionsModel } from '@components/custom-table/models/custom-table.options-model';

export class GithubListViewModel {
    title = 'Github';
    issuesOptionsTable = new CustomTableOptionsModel({
        type: 'githubIssues',
        items: [],
        loading: true,
        showLoadMore: true,
    });
    actionsOptionsTable = new CustomTableOptionsModel({
        type: 'githubActions',
        items: [],
        loading: true,
        showLoadMore: true,
    });
}
