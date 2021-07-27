// deno-lint-ignore-file
import { get } from '../main.ts';
import { githubError } from '../error.ts';
import type {
	GetRepositoryResponse,
	GetRepositoryArtifactsResponse,
	Artifact,
} from '../types.ts';

export interface GetRepository {
	org: string;
	repo: string;
}

export async function getRepository(
	org: string,
	repo: string
): Promise<GetRepositoryResponse> {
	const res = await (await get(`repos/${org}/${repo}`)).json();
	if (res.message) throw githubError.notFound(`REPOSITORY`, `${org}/${repo}`);
	return res;
}

interface GetRepositoryArtifacts {
	per_page?: string;
	page?: string;
}

export async function getRepositoryArtifacts(
	org: string,
	repo: string,
	options?: GetRepositoryArtifacts
): Promise<GetRepositoryArtifactsResponse> {
	const res = await (
		await get(`repos/${org}/${repo}/actions/artifacts`, {
			//@ts-expect-error
			params: options,
		})
	).json();
	if (res.message) throw githubError.notFound(`REPOSITORY`, `${org}/${repo}`);
	return res;
}

export async function getRepositoryArtifact(
	org: string,
	repo: string,
	id: string
): Promise<Artifact> {
	const res = await (
		await get(`repos/${org}/${repo}/actions/artifacts/${id}`)
	).json();
	if (res.message) throw githubError.notFound(`REPOSITORY`, `${org}/${repo}`);
	return res;
}
