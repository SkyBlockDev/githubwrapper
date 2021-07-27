// deno-lint-ignore-file
import { get } from '../main.ts';
import { githubError } from '../error.ts';
import { GetRepositoryResponse } from '../types.ts';

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
