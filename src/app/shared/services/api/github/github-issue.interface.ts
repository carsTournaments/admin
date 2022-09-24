export interface GithubIssueI {
    title: string;
    user: string;
    labels: string[];
    state: string;
    assignee: string;
    comments: number;
    body: string;
    url: string;
}

export interface GithubIssuesI {
    backend: GithubIssueI;
    app: GithubIssueI;
    admin: GithubIssueI;
}
