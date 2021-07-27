// deno-lint-ignore-file
import { get } from '../main.ts';
import { githubError } from '../error.ts';
import { GetUserResponse } from '../types.ts';

export async function getUser(user: string): Promise<GetUserResponse> {
	const res = await (await get(`user/${user}`)).json();
	if (res.message) throw githubError.notFound('USER', user);
	return res;
}
