// deno-lint-ignore-file
import { get } from "../main.ts";
import { githubError } from "../error.ts";
import type { GetUserResponse } from "../types.ts";

export async function getUser(user: string): Promise<GetUserResponse> {
  const res = await (await get(`users/${user}`)).json();
  if (res.message) throw githubError.error(res);
  return res;
}
