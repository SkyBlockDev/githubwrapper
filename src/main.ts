// deno-lint-ignore-file
export let github_token: string | undefined = undefined;
export let github_api_url = "https://api.github.com";
/**
 * Set the token to be used when making requests this increases the rate limit and allows more functionality
 */
export const setToken = (token: string) => (github_token = token);
/**
 * Set the endpoint to be used defaults to api.github.com
 */
export const setEndPoint = (url: string) => (github_api_url = url);

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
const defaults: Get = {
  method: "GET",
  extraHeaders: {},
};

export const get = async (endpoint: string, options: Get = {}) => {
  options = {
    ...defaults,
    ...options,
  };

  if (!endpoint.startsWith("/")) endpoint = "/" + endpoint;
  if (options.needsToken && !github_token) {
    throw new Error(`${endpoint} REQUIRES A TOKEN`);
  }

  if (github_token) {
    options.extraHeaders ? (options.extraHeaders.authorization = `token ${github_token}`) : (options.extraHeaders = { authorization: `token ${github_token}` });
  }

  let url = github_api_url + endpoint;

  if (options.params) {
    url += `?${new URLSearchParams(options.params)}`;
  }

  return await fetch(url, {
    method: options.method,
    body: options.body,
    headers: {
      accept: "application/vnd.github.v3+json",
      ...options.extraHeaders,
    },
  });
};
