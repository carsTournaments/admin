export class GithubIssue {
    owner?: string;
    repo?: string;
    title?: string;
    body?: string;
    assignees?: string[];
    labels?: string[];

    constructor(data?: GithubIssue) {
        this.owner = data?.owner;
        this.repo = data?.repo;
        this.title = data?.title;
        this.body = data?.body;
        this.assignees = data?.assignees;
        this.labels = data?.labels;
    }
}
