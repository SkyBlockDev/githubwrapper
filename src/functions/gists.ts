// deno-lint-ignore-file
// https://docs.github.com/en/rest/reference/gists
import { get } from '../main.ts';
import { githubError } from '../error.ts';
import type {
	CreateGistFiles,
	CreateGistResponse,
	ViewGistsResponse,
	GetGistResponse,
} from '../types.ts';

export interface CreateGist {
	files: CreateGistFiles;
	description: string;
	public?: boolean;
}

export async function createGist(
	options: CreateGist
): Promise<CreateGistResponse> {
	const res = await (
		await get(`gists`, {
			method: 'POST',
			body: JSON.stringify(options),
			needsToken: true,
		})
	).json();
	return res;
}
/**
 * Update a gist by id
 */
export async function updateGist(
	id: string,
	options: CreateGist
): Promise<CreateGistResponse> {
	const res = await (
		await get(`gists/${id}`, {
			method: 'PATCH',
			body: JSON.stringify(options),
			needsToken: true,
		})
	).json();
	return res;
}

export interface ViewGists {
	page?: number;
	//The amount of gists per page
	per_page?: number;
	since?: string;
}

/**
 * View the gists of the user the token is from or view public gists if theres no token set
 */
export async function viewGists(
	options?: ViewGists
): Promise<ViewGistsResponse[]> {
	const res = await (
		await get(`gists`, {
			method: 'GET',
			needsToken: true,
			//@ts-expect-error
			params: options,
		})
	).json();
	return res;
}
/**
 * Get a gist this requires a token for private gists
 * This also requires a gist id
 */
export async function getGist(id: string): Promise<GetGistResponse> {
	const res = await (await get(`gists/${id}`)).json();
	if (res.message) throw githubError.notFound(`GIST`, id);
	return res;
}

/**
 * Delete a gist this requires a token and a gist id
 */
export async function deleteGist(id: string): Promise<boolean> {
	//GIthub api is weird and returns nothing if the gist is deleted?
	const res = await (
		await get(`gists/${id}`, {
			method: 'DELETE',
			needsToken: true,
		})
	).text();
	if (!res) return true;
	if (JSON.parse(res).message) throw githubError.notFound(`GIST`, id);
	return false;
}
