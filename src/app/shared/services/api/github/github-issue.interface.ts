export interface GithubIssueListItemI {
    title: string;
    user: string;
    labels: GithubIssueListItemLabelI[];
    state: string;
    assignee: string;
    comments: number;
    body: string;
    url: string;
    repo: string;
}

export interface GithubIssueListItemLabelI {
    name: string;
    color: string;
}
