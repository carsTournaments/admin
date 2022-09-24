export interface GithubActionI {
    name: string;
    state: string;
    created: string;
    updated: string;
    url: string;
}

export interface GithubActionsI {
    backend: GithubActionI;
    app: GithubActionI;
    admin: GithubActionI;
}
