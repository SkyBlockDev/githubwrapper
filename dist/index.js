const fetch = require("node-fetch");var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  FileType: () => FileType1,
  Language: () => Language1,
  Name: () => Name1,
  OwnerType: () => OwnerType1,
  createGist: () => createGist1,
  deleteGist: () => deleteGist1,
  get: () => get1,
  getGist: () => getGist1,
  getGistCommits: () => getGistCommits1,
  getRepositories: () => getRepositories1,
  getRepository: () => getRepository1,
  getRepositoryArtifact: () => getRepositoryArtifact1,
  getRepositoryArtifacts: () => getRepositoryArtifacts1,
  getUser: () => getUser1,
  githubError: () => githubError1,
  github_api_url: () => github_api_url1,
  github_token: () => github_token1,
  setEndPoint: () => setEndPoint1,
  setToken: () => setToken1,
  updateGist: () => updateGist1,
  viewGists: () => viewGists1
});
let github_token1 = void 0;
let github_api_url1 = "https://api.github.com";
const setToken1 = (token) => github_token1 = token;
const setEndPoint1 = (url) => github_api_url1 = url;
const defaults = {
  method: "GET",
  extraHeaders: {}
};
const get1 = async (endpoint, options = {}) => {
  options = {
    ...defaults,
    ...options
  };
  if (!endpoint.startsWith("/"))
    endpoint = "/" + endpoint;
  if (options.needsToken && !github_token1) {
    throw new Error(`${endpoint} REQUIRES A TOKEN`);
  }
  if (github_token1) {
    options.extraHeaders ? options.extraHeaders.authorization = `token ${github_token1}` : options.extraHeaders = {
      authorization: `token ${github_token1}`
    };
  }
  let url = github_api_url1 + endpoint;
  if (options.params) {
    url += `?${new URLSearchParams(options.params)}`;
  }
  return await fetch(url, {
    method: options.method,
    body: options.body,
    headers: {
      accept: "application/vnd.github.v3+json",
      ...options.extraHeaders
    }
  });
};
class githubError1 extends Error {
  static notFound(thing, data) {
    return new this(`${thing.toUpperCase()} NOT FOUND "${data}"`);
  }
}
async function getRepositories1(org) {
  const res = await (await get1(`orgs/${org}/repos`)).json();
  if (res.message)
    throw githubError1.notFound(`ORG`, org);
  return res;
}
async function getRepository1(org, repo) {
  const res = await (await get1(`repos/${org}/${repo}`)).json();
  if (res.message)
    throw githubError1.notFound(`REPOSITORY`, `${org}/${repo}`);
  return res;
}
async function getRepositoryArtifacts1(org, repo, options) {
  const res = await (await get1(`repos/${org}/${repo}/actions/artifacts`, {
    params: options
  })).json();
  if (res.message)
    throw githubError1.notFound(`REPOSITORY`, `${org}/${repo}`);
  return res;
}
async function getRepositoryArtifact1(org, repo, id) {
  const res = await (await get1(`repos/${org}/${repo}/actions/artifacts/${id}`)).json();
  if (res.message)
    throw githubError1.notFound(`REPOSITORY`, `${org}/${repo}`);
  return res;
}
async function getUser1(user) {
  const res = await (await get1(`users/${user}`)).json();
  if (res.message)
    throw githubError1.notFound("USER", user);
  return res;
}
async function createGist1(options) {
  const res = await (await get1(`gists`, {
    method: "POST",
    body: JSON.stringify(options),
    needsToken: true
  })).json();
  return res;
}
async function updateGist1(id, options) {
  const res = await (await get1(`gists/${id}`, {
    method: "PATCH",
    body: JSON.stringify(options),
    needsToken: true
  })).json();
  return res;
}
async function viewGists1(options) {
  const res = await (await get1(`gists`, {
    method: "GET",
    needsToken: true,
    params: options
  })).json();
  return res;
}
async function getGist1(id) {
  const res = await (await get1(`gists/${id}`)).json();
  if (res.message)
    throw githubError1.notFound(`GIST`, id);
  return res;
}
async function getGistCommits1(id) {
  const res = await (await get1(`gists/${id}/commits`)).json();
  if (res.message)
    throw githubError1.notFound(`GIST`, id);
  return res;
}
async function deleteGist1(id) {
  const res = await (await get1(`gists/${id}`, {
    method: "DELETE",
    needsToken: true
  })).text();
  if (!res)
    return true;
  if (JSON.parse(res).message)
    throw githubError1.notFound(`GIST`, id);
  return false;
}
var Language1;
(function(Language12) {
  Language12["HTML"] = "HTML";
  Language12["JSON"] = "JSON";
  Language12["JavaScript"] = "JavaScript";
  Language12["Markdown"] = "Markdown";
  Language12["Python"] = "Python";
  Language12["Scss"] = "SCSS";
  Language12["Solidity"] = "Solidity";
  Language12["Text"] = "Text";
  Language12["TypeScript"] = "TypeScript";
})(Language1 || (Language1 = {}));
var FileType1;
(function(FileType12) {
  FileType12["ApplicationJSON"] = "application/json";
  FileType12["ApplicationJavascript"] = "application/javascript";
  FileType12["ApplicationXPython"] = "application/x-python";
  FileType12["TextHTML"] = "text/html";
  FileType12["TextMarkdown"] = "text/markdown";
  FileType12["TextPlain"] = "text/plain";
  FileType12["VideoMP2T"] = "video/MP2T";
})(FileType1 || (FileType1 = {}));
var OwnerType1;
(function(OwnerType12) {
  OwnerType12["User"] = "User";
})(OwnerType1 || (OwnerType1 = {}));
var Name1;
(function(Name12) {
  Name12["BuildArtifacts"] = "build-artifacts";
})(Name1 || (Name1 = {}));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FileType,
  Language,
  Name,
  OwnerType,
  createGist,
  deleteGist,
  get,
  getGist,
  getGistCommits,
  getRepositories,
  getRepository,
  getRepositoryArtifact,
  getRepositoryArtifacts,
  getUser,
  githubError,
  github_api_url,
  github_token,
  setEndPoint,
  setToken,
  updateGist,
  viewGists
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiYnJvd3Nlci5idW5kbGUuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImxldCBnaXRodWJfdG9rZW4xID0gdW5kZWZpbmVkO1xubGV0IGdpdGh1Yl9hcGlfdXJsMSA9IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbVwiO1xuY29uc3Qgc2V0VG9rZW4xID0gKHRva2VuKT0+Z2l0aHViX3Rva2VuMSA9IHRva2VuXG47XG5jb25zdCBzZXRFbmRQb2ludDEgPSAodXJsKT0+Z2l0aHViX2FwaV91cmwxID0gdXJsXG47XG5jb25zdCBkZWZhdWx0cyA9IHtcbiAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgZXh0cmFIZWFkZXJzOiB7XG4gICAgfVxufTtcbmNvbnN0IGdldDEgPSBhc3luYyAoZW5kcG9pbnQsIG9wdGlvbnMgPSB7XG59KT0+e1xuICAgIG9wdGlvbnMgPSB7XG4gICAgICAgIC4uLmRlZmF1bHRzLFxuICAgICAgICAuLi5vcHRpb25zXG4gICAgfTtcbiAgICBpZiAoIWVuZHBvaW50LnN0YXJ0c1dpdGgoXCIvXCIpKSBlbmRwb2ludCA9IFwiL1wiICsgZW5kcG9pbnQ7XG4gICAgaWYgKG9wdGlvbnMubmVlZHNUb2tlbiAmJiAhZ2l0aHViX3Rva2VuMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7ZW5kcG9pbnR9IFJFUVVJUkVTIEEgVE9LRU5gKTtcbiAgICB9XG4gICAgaWYgKGdpdGh1Yl90b2tlbjEpIHtcbiAgICAgICAgb3B0aW9ucy5leHRyYUhlYWRlcnMgPyBvcHRpb25zLmV4dHJhSGVhZGVycy5hdXRob3JpemF0aW9uID0gYHRva2VuICR7Z2l0aHViX3Rva2VuMX1gIDogb3B0aW9ucy5leHRyYUhlYWRlcnMgPSB7XG4gICAgICAgICAgICBhdXRob3JpemF0aW9uOiBgdG9rZW4gJHtnaXRodWJfdG9rZW4xfWBcbiAgICAgICAgfTtcbiAgICB9XG4gICAgbGV0IHVybCA9IGdpdGh1Yl9hcGlfdXJsMSArIGVuZHBvaW50O1xuICAgIGlmIChvcHRpb25zLnBhcmFtcykge1xuICAgICAgICB1cmwgKz0gYD8ke25ldyBVUkxTZWFyY2hQYXJhbXMob3B0aW9ucy5wYXJhbXMpfWA7XG4gICAgfVxuICAgIHJldHVybiBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgbWV0aG9kOiBvcHRpb25zLm1ldGhvZCxcbiAgICAgICAgYm9keTogb3B0aW9ucy5ib2R5LFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBhY2NlcHQ6IFwiYXBwbGljYXRpb24vdm5kLmdpdGh1Yi52Mytqc29uXCIsXG4gICAgICAgICAgICAuLi5vcHRpb25zLmV4dHJhSGVhZGVyc1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuZXhwb3J0IHsgZ2l0aHViX3Rva2VuMSBhcyBnaXRodWJfdG9rZW4gfTtcbmV4cG9ydCB7IGdpdGh1Yl9hcGlfdXJsMSBhcyBnaXRodWJfYXBpX3VybCB9O1xuZXhwb3J0IHsgc2V0VG9rZW4xIGFzIHNldFRva2VuIH07XG5leHBvcnQgeyBzZXRFbmRQb2ludDEgYXMgc2V0RW5kUG9pbnQgfTtcbmV4cG9ydCB7IGdldDEgYXMgZ2V0IH07XG5jbGFzcyBnaXRodWJFcnJvcjEgZXh0ZW5kcyBFcnJvciB7XG4gICAgc3RhdGljIG5vdEZvdW5kKHRoaW5nLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBuZXcgdGhpcyhgJHt0aGluZy50b1VwcGVyQ2FzZSgpfSBOT1QgRk9VTkQgXCIke2RhdGF9XCJgKTtcbiAgICB9XG59XG5leHBvcnQgeyBnaXRodWJFcnJvcjEgYXMgZ2l0aHViRXJyb3IgfTtcbmFzeW5jIGZ1bmN0aW9uIGdldFJlcG9zaXRvcmllczEob3JnKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgKGF3YWl0IGdldDEoYG9yZ3MvJHtvcmd9L3JlcG9zYCkpLmpzb24oKTtcbiAgICBpZiAocmVzLm1lc3NhZ2UpIHRocm93IGdpdGh1YkVycm9yMS5ub3RGb3VuZChgT1JHYCwgb3JnKTtcbiAgICByZXR1cm4gcmVzO1xufVxuYXN5bmMgZnVuY3Rpb24gZ2V0UmVwb3NpdG9yeTEob3JnLCByZXBvKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgKGF3YWl0IGdldDEoYHJlcG9zLyR7b3JnfS8ke3JlcG99YCkpLmpzb24oKTtcbiAgICBpZiAocmVzLm1lc3NhZ2UpIHRocm93IGdpdGh1YkVycm9yMS5ub3RGb3VuZChgUkVQT1NJVE9SWWAsIGAke29yZ30vJHtyZXBvfWApO1xuICAgIHJldHVybiByZXM7XG59XG5hc3luYyBmdW5jdGlvbiBnZXRSZXBvc2l0b3J5QXJ0aWZhY3RzMShvcmcsIHJlcG8sIG9wdGlvbnMpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCAoYXdhaXQgZ2V0MShgcmVwb3MvJHtvcmd9LyR7cmVwb30vYWN0aW9ucy9hcnRpZmFjdHNgLCB7XG4gICAgICAgIHBhcmFtczogb3B0aW9uc1xuICAgIH0pKS5qc29uKCk7XG4gICAgaWYgKHJlcy5tZXNzYWdlKSB0aHJvdyBnaXRodWJFcnJvcjEubm90Rm91bmQoYFJFUE9TSVRPUllgLCBgJHtvcmd9LyR7cmVwb31gKTtcbiAgICByZXR1cm4gcmVzO1xufVxuYXN5bmMgZnVuY3Rpb24gZ2V0UmVwb3NpdG9yeUFydGlmYWN0MShvcmcsIHJlcG8sIGlkKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgKGF3YWl0IGdldDEoYHJlcG9zLyR7b3JnfS8ke3JlcG99L2FjdGlvbnMvYXJ0aWZhY3RzLyR7aWR9YCkpLmpzb24oKTtcbiAgICBpZiAocmVzLm1lc3NhZ2UpIHRocm93IGdpdGh1YkVycm9yMS5ub3RGb3VuZChgUkVQT1NJVE9SWWAsIGAke29yZ30vJHtyZXBvfWApO1xuICAgIHJldHVybiByZXM7XG59XG5leHBvcnQgeyBnZXRSZXBvc2l0b3JpZXMxIGFzIGdldFJlcG9zaXRvcmllcyB9O1xuZXhwb3J0IHsgZ2V0UmVwb3NpdG9yeTEgYXMgZ2V0UmVwb3NpdG9yeSB9O1xuZXhwb3J0IHsgZ2V0UmVwb3NpdG9yeUFydGlmYWN0czEgYXMgZ2V0UmVwb3NpdG9yeUFydGlmYWN0cyB9O1xuZXhwb3J0IHsgZ2V0UmVwb3NpdG9yeUFydGlmYWN0MSBhcyBnZXRSZXBvc2l0b3J5QXJ0aWZhY3QgfTtcbmFzeW5jIGZ1bmN0aW9uIGdldFVzZXIxKHVzZXIpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCAoYXdhaXQgZ2V0MShgdXNlcnMvJHt1c2VyfWApKS5qc29uKCk7XG4gICAgaWYgKHJlcy5tZXNzYWdlKSB0aHJvdyBnaXRodWJFcnJvcjEubm90Rm91bmQoXCJVU0VSXCIsIHVzZXIpO1xuICAgIHJldHVybiByZXM7XG59XG5leHBvcnQgeyBnZXRVc2VyMSBhcyBnZXRVc2VyIH07XG5hc3luYyBmdW5jdGlvbiBjcmVhdGVHaXN0MShvcHRpb25zKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgKGF3YWl0IGdldDEoYGdpc3RzYCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShvcHRpb25zKSxcbiAgICAgICAgbmVlZHNUb2tlbjogdHJ1ZVxuICAgIH0pKS5qc29uKCk7XG4gICAgcmV0dXJuIHJlcztcbn1cbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUdpc3QxKGlkLCBvcHRpb25zKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgKGF3YWl0IGdldDEoYGdpc3RzLyR7aWR9YCwge1xuICAgICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob3B0aW9ucyksXG4gICAgICAgIG5lZWRzVG9rZW46IHRydWVcbiAgICB9KSkuanNvbigpO1xuICAgIHJldHVybiByZXM7XG59XG5hc3luYyBmdW5jdGlvbiB2aWV3R2lzdHMxKG9wdGlvbnMpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCAoYXdhaXQgZ2V0MShgZ2lzdHNgLCB7XG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgbmVlZHNUb2tlbjogdHJ1ZSxcbiAgICAgICAgcGFyYW1zOiBvcHRpb25zXG4gICAgfSkpLmpzb24oKTtcbiAgICByZXR1cm4gcmVzO1xufVxuYXN5bmMgZnVuY3Rpb24gZ2V0R2lzdDEoaWQpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCAoYXdhaXQgZ2V0MShgZ2lzdHMvJHtpZH1gKSkuanNvbigpO1xuICAgIGlmIChyZXMubWVzc2FnZSkgdGhyb3cgZ2l0aHViRXJyb3IxLm5vdEZvdW5kKGBHSVNUYCwgaWQpO1xuICAgIHJldHVybiByZXM7XG59XG5hc3luYyBmdW5jdGlvbiBnZXRHaXN0Q29tbWl0czEoaWQpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCAoYXdhaXQgZ2V0MShgZ2lzdHMvJHtpZH0vY29tbWl0c2ApKS5qc29uKCk7XG4gICAgaWYgKHJlcy5tZXNzYWdlKSB0aHJvdyBnaXRodWJFcnJvcjEubm90Rm91bmQoYEdJU1RgLCBpZCk7XG4gICAgcmV0dXJuIHJlcztcbn1cbmFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUdpc3QxKGlkKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgKGF3YWl0IGdldDEoYGdpc3RzLyR7aWR9YCwge1xuICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICAgIG5lZWRzVG9rZW46IHRydWVcbiAgICB9KSkudGV4dCgpO1xuICAgIGlmICghcmVzKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoSlNPTi5wYXJzZShyZXMpLm1lc3NhZ2UpIHRocm93IGdpdGh1YkVycm9yMS5ub3RGb3VuZChgR0lTVGAsIGlkKTtcbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnQgeyBjcmVhdGVHaXN0MSBhcyBjcmVhdGVHaXN0IH07XG5leHBvcnQgeyB1cGRhdGVHaXN0MSBhcyB1cGRhdGVHaXN0IH07XG5leHBvcnQgeyB2aWV3R2lzdHMxIGFzIHZpZXdHaXN0cyB9O1xuZXhwb3J0IHsgZ2V0R2lzdDEgYXMgZ2V0R2lzdCB9O1xuZXhwb3J0IHsgZ2V0R2lzdENvbW1pdHMxIGFzIGdldEdpc3RDb21taXRzIH07XG5leHBvcnQgeyBkZWxldGVHaXN0MSBhcyBkZWxldGVHaXN0IH07XG52YXIgTGFuZ3VhZ2UxO1xuKGZ1bmN0aW9uKExhbmd1YWdlMSkge1xuICAgIExhbmd1YWdlMVtcIkhUTUxcIl0gPSBcIkhUTUxcIjtcbiAgICBMYW5ndWFnZTFbXCJKU09OXCJdID0gXCJKU09OXCI7XG4gICAgTGFuZ3VhZ2UxW1wiSmF2YVNjcmlwdFwiXSA9IFwiSmF2YVNjcmlwdFwiO1xuICAgIExhbmd1YWdlMVtcIk1hcmtkb3duXCJdID0gXCJNYXJrZG93blwiO1xuICAgIExhbmd1YWdlMVtcIlB5dGhvblwiXSA9IFwiUHl0aG9uXCI7XG4gICAgTGFuZ3VhZ2UxW1wiU2Nzc1wiXSA9IFwiU0NTU1wiO1xuICAgIExhbmd1YWdlMVtcIlNvbGlkaXR5XCJdID0gXCJTb2xpZGl0eVwiO1xuICAgIExhbmd1YWdlMVtcIlRleHRcIl0gPSBcIlRleHRcIjtcbiAgICBMYW5ndWFnZTFbXCJUeXBlU2NyaXB0XCJdID0gXCJUeXBlU2NyaXB0XCI7XG59KShMYW5ndWFnZTEgfHwgKExhbmd1YWdlMSA9IHtcbn0pKTtcbnZhciBGaWxlVHlwZTE7XG4oZnVuY3Rpb24oRmlsZVR5cGUxKSB7XG4gICAgRmlsZVR5cGUxW1wiQXBwbGljYXRpb25KU09OXCJdID0gXCJhcHBsaWNhdGlvbi9qc29uXCI7XG4gICAgRmlsZVR5cGUxW1wiQXBwbGljYXRpb25KYXZhc2NyaXB0XCJdID0gXCJhcHBsaWNhdGlvbi9qYXZhc2NyaXB0XCI7XG4gICAgRmlsZVR5cGUxW1wiQXBwbGljYXRpb25YUHl0aG9uXCJdID0gXCJhcHBsaWNhdGlvbi94LXB5dGhvblwiO1xuICAgIEZpbGVUeXBlMVtcIlRleHRIVE1MXCJdID0gXCJ0ZXh0L2h0bWxcIjtcbiAgICBGaWxlVHlwZTFbXCJUZXh0TWFya2Rvd25cIl0gPSBcInRleHQvbWFya2Rvd25cIjtcbiAgICBGaWxlVHlwZTFbXCJUZXh0UGxhaW5cIl0gPSBcInRleHQvcGxhaW5cIjtcbiAgICBGaWxlVHlwZTFbXCJWaWRlb01QMlRcIl0gPSBcInZpZGVvL01QMlRcIjtcbn0pKEZpbGVUeXBlMSB8fCAoRmlsZVR5cGUxID0ge1xufSkpO1xudmFyIE93bmVyVHlwZTE7XG4oZnVuY3Rpb24oT3duZXJUeXBlMSkge1xuICAgIE93bmVyVHlwZTFbXCJVc2VyXCJdID0gXCJVc2VyXCI7XG59KShPd25lclR5cGUxIHx8IChPd25lclR5cGUxID0ge1xufSkpO1xudmFyIE5hbWUxO1xuKGZ1bmN0aW9uKE5hbWUxKSB7XG4gICAgTmFtZTFbXCJCdWlsZEFydGlmYWN0c1wiXSA9IFwiYnVpbGQtYXJ0aWZhY3RzXCI7XG59KShOYW1lMSB8fCAoTmFtZTEgPSB7XG59KSk7XG5leHBvcnQgeyBMYW5ndWFnZTEgYXMgTGFuZ3VhZ2UsICB9O1xuZXhwb3J0IHsgRmlsZVR5cGUxIGFzIEZpbGVUeXBlLCAgfTtcbmV4cG9ydCB7IE93bmVyVHlwZTEgYXMgT3duZXJUeXBlLCAgfTtcbmV4cG9ydCB7IE5hbWUxIGFzIE5hbWUsICB9O1xuXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUksZ0JBQWdCO0FBQ3BCLElBQUksa0JBQWtCO0FBQ3RCLE1BQU0sWUFBWSxDQUFDLFVBQVEsZ0JBQWdCO0FBRTNDLE1BQU0sZUFBZSxDQUFDLFFBQU0sa0JBQWtCO0FBRTlDLE1BQU0sV0FBVztBQUFBLEVBQ2IsUUFBUTtBQUFBLEVBQ1IsY0FBYztBQUFBO0FBR2xCLE1BQU0sT0FBTyxPQUFPLFVBQVUsVUFBVSxPQUNwQztBQUNBLFlBQVU7QUFBQSxPQUNIO0FBQUEsT0FDQTtBQUFBO0FBRVAsTUFBSSxDQUFDLFNBQVMsV0FBVztBQUFNLGVBQVcsTUFBTTtBQUNoRCxNQUFJLFFBQVEsY0FBYyxDQUFDLGVBQWU7QUFDdEMsVUFBTSxJQUFJLE1BQU0sR0FBRztBQUFBO0FBRXZCLE1BQUksZUFBZTtBQUNmLFlB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
