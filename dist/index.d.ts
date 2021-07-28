/// <amd-module name="file:///home/runner/work/githubwrapper/githubwrapper/dist/browser.bundle.js" />
declare let github_token1: any;
declare let github_api_url1: string;
declare function setToken1(token: any): any;
declare function setEndPoint1(url: any): any;
declare function get1(endpoint: any, options?: {}): Promise<Response>;
declare class githubError1 extends Error {
    static notFound(thing: any, data: any): githubError1;
}
declare function getRepositories1(org: any): Promise<any>;
declare function getRepository1(org: any, repo: any): Promise<any>;
declare function getRepositoryArtifacts1(org: any, repo: any, options: any): Promise<any>;
declare function getRepositoryArtifact1(org: any, repo: any, id: any): Promise<any>;
declare function getUser1(user: any): Promise<any>;
declare function createGist1(options: any): Promise<any>;
declare function updateGist1(id: any, options: any): Promise<any>;
declare function viewGists1(options: any): Promise<any>;
declare function getGist1(id: any): Promise<any>;
declare function getGistCommits1(id: any): Promise<any>;
declare function deleteGist1(id: any): Promise<boolean>;
declare var Language1: any;
declare var FileType1: any;
declare var OwnerType1: any;
declare var Name1: any;
export { github_token1 as github_token, github_api_url1 as github_api_url, setToken1 as setToken, setEndPoint1 as setEndPoint, get1 as get, githubError1 as githubError, getRepositories1 as getRepositories, getRepository1 as getRepository, getRepositoryArtifacts1 as getRepositoryArtifacts, getRepositoryArtifact1 as getRepositoryArtifact, getUser1 as getUser, createGist1 as createGist, updateGist1 as updateGist, viewGists1 as viewGists, getGist1 as getGist, getGistCommits1 as getGistCommits, deleteGist1 as deleteGist, Language1 as Language, FileType1 as FileType, OwnerType1 as OwnerType, Name1 as Name };
