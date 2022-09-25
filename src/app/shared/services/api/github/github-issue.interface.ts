export interface GithubIssueI {
    title: string;
    user: string;
    labels: GithubIssueLabelI[];
    state: string;
    assignee: string;
    comments: number;
    body: string;
    url: string;
    repo: string;
}

export interface GithubIssueLabelI {
    name: string;
    color: string;
}
