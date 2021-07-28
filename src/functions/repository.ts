// deno-lint-ignore-file
import { get } from "../main.ts";
import { githubError } from "../error.ts";
import type { GetRepositoryResponse, GetRepositoryArtifactsResponse, Artifact, GetRepositoriesResponse, Visibility } from "../types.ts";

/**
 * Get a organization's repostiries
 * !!! THIS ONLY WORKS FOR organizations
 */
export async function getRepositories(org: string): Promise<GetRepositoriesResponse> {
  const res = await (await get(`orgs/${org}/repos`)).json();
  if (res.message) throw githubError.error(res);
  return res;
}

interface CreateRepository {
  name: string;
  description?: string;
  homepage?: string;
  private?: boolean;
  visibility?: Visibility;
}
/**
 * Create a repository
 * !!! THIS ONLY WORKS FOR organizations
 * STILL NEED A INTERFACE FOR THIS
 * https://docs.github.com/en/rest/reference/repos#create-an-organization-repository
 */
export async function createRepository(org: string, options: CreateRepository) {
  const res = await (
    await get(`orgs/${org}/repos`, {
      method: "POST",
      body: JSON.stringify(options),
      needsToken: true,
    })
  ).json();
  if (res.message) throw githubError.error(res);
  return res;
}
/**
 * https://docs.github.com/en/rest/reference/repos#get-a-repository
 */
export async function getRepository(org: string, repo: string): Promise<GetRepositoryResponse> {
  const res = await (await get(`repos/${org}/${repo}`)).json();
  if (res.message) throw githubError.error(res);
  return res;
}

interface GetRepositoryArtifacts {
  per_page?: string;
  page?: string;
}

export async function getRepositoryArtifacts(org: string, repo: string, options?: GetRepositoryArtifacts): Promise<GetRepositoryArtifactsResponse> {
  const res = await (
    await get(`repos/${org}/${repo}/actions/artifacts`, {
      //@ts-expect-error
      params: options,
    })
  ).json();
  if (res.message) throw githubError.error(res);

  return res;
}

export async function getRepositoryArtifact(org: string, repo: string, id: string): Promise<Artifact> {
  const res = await (await get(`repos/${org}/${repo}/actions/artifacts/${id}`)).json();
  if (res.message) throw githubError.error(res);

  return res;
}
//TODO-ADD DELETE ARTIFACT
