/// <amd-module name="file:///home/runner/work/githubwrapper/githubwrapper/src/mod.ts" />
export * from "./main.ts";
export * from "./functions/mod.ts";
export * from "./error.ts";
export * from "./types.ts";

/// <amd-module name="file:///home/runner/work/githubwrapper/githubwrapper/src/types.ts" />
export declare type Visibility = "public" | "private" | "internal";
export interface Owner {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
}
export interface GetUserResponse {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name: string;
    company: string;
    blog: string;
    location: string;
    email: null;
    hireable: boolean;
    bio: string;
    twitter_username: null;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
}
export interface GetRepositoryResponse {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    private: boolean;
    owner: Owner;
    html_url: string;
    description: string;
    fork: boolean;
    url: string;
    forks_url: string;
    keys_url: string;
    collaborators_url: string;
    teams_url: string;
    hooks_url: string;
    issue_events_url: string;
    events_url: string;
    assignees_url: string;
    branches_url: string;
    tags_url: string;
    blobs_url: string;
    git_tags_url: string;
    git_refs_url: string;
    trees_url: string;
    statuses_url: string;
    languages_url: string;
    stargazers_url: string;
    contributors_url: string;
    subscribers_url: string;
    subscription_url: string;
    commits_url: string;
    git_commits_url: string;
    comments_url: string;
    issue_comment_url: string;
    contents_url: string;
    compare_url: string;
    merges_url: string;
    archive_url: string;
    downloads_url: string;
    issues_url: string;
    pulls_url: string;
    milestones_url: string;
    notifications_url: string;
    labels_url: string;
    releases_url: string;
    deployments_url: string;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    git_url: string;
    ssh_url: string;
    clone_url: string;
    svn_url: string;
    homepage: null;
    size: number;
    stargazers_count: number;
    watchers_count: number;
    language: string;
    has_issues: boolean;
    has_projects: boolean;
    has_downloads: boolean;
    has_wiki: boolean;
    has_pages: boolean;
    forks_count: number;
    mirror_url: null;
    archived: boolean;
    disabled: boolean;
    open_issues_count: number;
    license: null;
    forks: number;
    open_issues: number;
    watchers: number;
    default_branch: string;
    temp_clone_token: null;
    network_count: number;
    subscribers_count: number;
}
export interface ViewGistsResponse {
    url: string;
    forks_url: string;
    commits_url: string;
    id: string;
    node_id: string;
    git_pull_url: string;
    git_push_url: string;
    html_url: string;
    files: {
        [key: string]: File;
    };
    public: boolean;
    created_at: string;
    updated_at: string;
    description: null | string;
    comments: number;
    user: null;
    comments_url: string;
    owner: Owner;
    truncated: boolean;
}
export declare enum Language {
    HTML = "HTML",
    JSON = "JSON",
    JavaScript = "JavaScript",
    Markdown = "Markdown",
    Python = "Python",
    Scss = "SCSS",
    Solidity = "Solidity",
    Text = "Text",
    TypeScript = "TypeScript"
}
export declare enum FileType {
    ApplicationJSON = "application/json",
    ApplicationJavascript = "application/javascript",
    ApplicationXPython = "application/x-python",
    TextHTML = "text/html",
    TextMarkdown = "text/markdown",
    TextPlain = "text/plain",
    VideoMP2T = "video/MP2T"
}
export declare enum OwnerType {
    User = "User"
}
export interface CreateGistFiles {
    [name: string]: {
        name: string;
        content: string;
    };
}
export interface CreateGistResponse {
    url: string;
    forks_url: string;
    commits_url: string;
    id: string;
    node_id: string;
    git_pull_url: string;
    git_push_url: string;
    html_url: string;
    files: Files;
    public: boolean;
    created_at: string;
    updated_at: string;
    description: string;
    comments: number;
    user: null;
    comments_url: string;
    owner: Owner;
    forks: any[];
    history: History[];
    truncated: boolean;
}
export interface Files {
    [name: string]: File;
}
export interface History {
    user: Owner;
    version: string;
    committed_at: string;
    change_status: ChangeStatus;
    url: string;
}
export interface ChangeStatus {
    total: number;
    additions: number;
    deletions: number;
}
export interface GetGistResponse {
    url: string;
    forks_url: string;
    commits_url: string;
    id: string;
    node_id: string;
    git_pull_url: string;
    git_push_url: string;
    html_url: string;
    files: Files;
    public: boolean;
    created_at: string;
    updated_at: string;
    description: string;
    comments: number;
    user: null;
    comments_url: string;
    owner: Owner;
    forks: any[];
    history: History[];
    truncated: boolean;
}
export interface GetGistCommitsResponse {
    user: User;
    version: string;
    committed_at: string;
    change_status: ChangeStatus;
    url: string;
}
export interface User {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
}
export interface GetRepositoryArtifactsResponse {
    total_count: number;
    artifacts: Artifact[];
}
export interface Artifact {
    id: number;
    node_id: string;
    name: Name;
    size_in_bytes: number;
    url: string;
    archive_download_url: string;
    expired: boolean;
    created_at: string;
    updated_at: string;
    expires_at: string;
}
export declare enum Name {
    BuildArtifacts = "build-artifacts"
}
export interface GetRepositoriesResponse {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    private: boolean;
    owner: Owner;
    html_url: string;
    description: null | string;
    fork: boolean;
    url: string;
    forks_url: string;
    keys_url: string;
    collaborators_url: string;
    teams_url: string;
    hooks_url: string;
    issue_events_url: string;
    events_url: string;
    assignees_url: string;
    branches_url: string;
    tags_url: string;
    blobs_url: string;
    git_tags_url: string;
    git_refs_url: string;
    trees_url: string;
    statuses_url: string;
    languages_url: string;
    stargazers_url: string;
    contributors_url: string;
    subscribers_url: string;
    subscription_url: string;
    commits_url: string;
    git_commits_url: string;
    comments_url: string;
    issue_comment_url: string;
    contents_url: string;
    compare_url: string;
    merges_url: string;
    archive_url: string;
    downloads_url: string;
    issues_url: string;
    pulls_url: string;
    milestones_url: string;
    notifications_url: string;
    labels_url: string;
    releases_url: string;
    deployments_url: string;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    git_url: string;
    ssh_url: string;
    clone_url: string;
    svn_url: string;
    homepage: null | string;
    size: number;
    stargazers_count: number;
    watchers_count: number;
    language: string;
    has_issues: boolean;
    has_projects: boolean;
    has_downloads: boolean;
    has_wiki: boolean;
    has_pages: boolean;
    forks_count: number;
    mirror_url: null;
    archived: boolean;
    disabled: boolean;
    open_issues_count: number;
    license: License | null;
    forks: number;
    open_issues: number;
    watchers: number;
    default_branch: string;
    permissions: Permissions;
}
export interface License {
    key: string;
    name: string;
    spdx_id: string;
    url: null | string;
    node_id: string;
}
export interface Permissions {
    admin: boolean;
    push: boolean;
    pull: boolean;
}

/// <amd-module name="file:///home/runner/work/githubwrapper/githubwrapper/src/functions/mod.ts" />
export * from "./repository.ts";
export * from "./user.ts";
export * from "./gists.ts";

/// <amd-module name="file:///home/runner/work/githubwrapper/githubwrapper/src/main.ts" />
export declare let github_token: string | undefined;
export declare let github_api_url: string;
export declare const setToken: (token: string) => string;
export declare const setEndPoint: (url: string) => string;
export interface GithubErrorResponse {
    message: string;
    documentation_url: string;
}
export interface StringObject {
    [key: string]: string;
}
export interface Get {
    needsToken?: boolean;
    method?: string;
    body?: string;
    params?: StringObject;
    extraHeaders?: StringObject;
}
export declare const get: (endpoint: string, options?: Get) => Promise<Response>;

/// <amd-module name="file:///home/runner/work/githubwrapper/githubwrapper/src/error.ts" />
interface GithubError {
    message: string;
    documentation_url: string;
}
export declare class githubError extends Error {
    static error(message: GithubError): void;
}
export {};

/// <amd-module name="file:///home/runner/work/githubwrapper/githubwrapper/src/functions/gists.ts" />
import type { CreateGistFiles, CreateGistResponse, ViewGistsResponse, GetGistResponse, GetGistCommitsResponse } from "../types.ts";
export interface CreateGist {
    files: CreateGistFiles;
    description: string;
    public?: boolean;
}
export declare function createGist(options: CreateGist): Promise<CreateGistResponse>;
export declare function updateGist(id: string, options: CreateGist): Promise<CreateGistResponse>;
export interface ViewGists {
    page?: number;
    per_page?: number;
    since?: string;
}
export declare function viewGists(options?: ViewGists): Promise<ViewGistsResponse[]>;
export declare function getGist(id: string): Promise<GetGistResponse>;
export declare function getGistCommits(id: string): Promise<GetGistCommitsResponse[]>;
export declare function deleteGist(id: string): Promise<boolean>;

/// <amd-module name="file:///home/runner/work/githubwrapper/githubwrapper/src/functions/repository.ts" />
import type { GetRepositoryResponse, GetRepositoryArtifactsResponse, Artifact, GetRepositoriesResponse, Visibility } from "../types.ts";
export declare function getRepositories(org: string): Promise<GetRepositoriesResponse>;
interface CreateRepository {
    name: string;
    description?: string;
    homepage?: string;
    private?: boolean;
    visibility?: Visibility;
}
export declare function createRepository(org: string, options: CreateRepository): Promise<any>;
export declare function getRepository(org: string, repo: string): Promise<GetRepositoryResponse>;
interface GetRepositoryArtifacts {
    per_page?: string;
    page?: string;
}
export declare function getRepositoryArtifacts(org: string, repo: string, options?: GetRepositoryArtifacts): Promise<GetRepositoryArtifactsResponse>;
export declare function getRepositoryArtifact(org: string, repo: string, id: string): Promise<Artifact>;
export {};

/// <amd-module name="file:///home/runner/work/githubwrapper/githubwrapper/src/functions/user.ts" />
import type { GetUserResponse } from "../types.ts";
export declare function getUser(user: string): Promise<GetUserResponse>;

/// <amd-module name="file:///home/runner/work/githubwrapper/githubwrapper/mod.ts" />
export * from './src/mod.ts';
