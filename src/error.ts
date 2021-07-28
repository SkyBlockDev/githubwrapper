interface GithubError {
  message: string;
  documentation_url: string;
}
export class githubError extends Error {
  static error(message: GithubError) {
    throw new this(`${message.message.toUpperCase()}, DOCUMENTATION URL: ${message.documentation_url}`);
  }
}
