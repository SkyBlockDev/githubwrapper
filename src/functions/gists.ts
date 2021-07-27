// deno-lint-ignore-file
// https://docs.github.com/en/rest/reference/gists
import { get } from '../main.ts';
import {
	CreateGistFiles,
	CreateGistResponse,
	ViewGistsResponse,
} from '../types.ts';

export interface CreateGist {
	files: CreateGistFiles;
	description: string;
	public: boolean;
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
