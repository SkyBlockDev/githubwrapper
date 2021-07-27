// deno-lint-ignore-file
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
	files: { [key: string]: File };
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

export interface File {
	filename: string;
	type: FileType;
	language: Language | null;
	raw_url: string;
	size: number;
}

export enum Language {
	HTML = 'HTML',
	JSON = 'JSON',
	JavaScript = 'JavaScript',
	Markdown = 'Markdown',
	Python = 'Python',
	Scss = 'SCSS',
	Solidity = 'Solidity',
	Text = 'Text',
	TypeScript = 'TypeScript',
}

export enum FileType {
	ApplicationJSON = 'application/json',
	ApplicationJavascript = 'application/javascript',
	ApplicationXPython = 'application/x-python',
	TextHTML = 'text/html',
	TextMarkdown = 'text/markdown',
	TextPlain = 'text/plain',
	VideoMP2T = 'video/MP2T',
}

export enum OwnerType {
	User = 'User',
}

export interface CreateGistFiles {
	[name: string]: { name: string; content: string };
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
