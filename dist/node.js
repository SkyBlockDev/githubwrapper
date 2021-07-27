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
  const res = await (await get1(`user/${user}`)).json();
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiYnJvd3Nlci5idW5kbGUuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImxldCBnaXRodWJfdG9rZW4xID0gdW5kZWZpbmVkO1xubGV0IGdpdGh1Yl9hcGlfdXJsMSA9IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbVwiO1xuY29uc3Qgc2V0VG9rZW4xID0gKHRva2VuKT0+Z2l0aHViX3Rva2VuMSA9IHRva2VuXG47XG5jb25zdCBzZXRFbmRQb2ludDEgPSAodXJsKT0+Z2l0aHViX2FwaV91cmwxID0gdXJsXG47XG5jb25zdCBkZWZhdWx0cyA9IHtcbiAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgZXh0cmFIZWFkZXJzOiB7XG4gICAgfVxufTtcbmNvbnN0IGdldDEgPSBhc3luYyAoZW5kcG9pbnQsIG9wdGlvbnMgPSB7XG59KT0+e1xuICAgIG9wdGlvbnMgPSB7XG4gICAgICAgIC4uLmRlZmF1bHRzLFxuICAgICAgICAuLi5vcHRpb25zXG4gICAgfTtcbiAgICBpZiAoIWVuZHBvaW50LnN0YXJ0c1dpdGgoXCIvXCIpKSBlbmRwb2ludCA9IFwiL1wiICsgZW5kcG9pbnQ7XG4gICAgaWYgKG9wdGlvbnMubmVlZHNUb2tlbiAmJiAhZ2l0aHViX3Rva2VuMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7ZW5kcG9pbnR9IFJFUVVJUkVTIEEgVE9LRU5gKTtcbiAgICB9XG4gICAgaWYgKGdpdGh1Yl90b2tlbjEpIHtcbiAgICAgICAgb3B0aW9ucy5leHRyYUhlYWRlcnMgPyBvcHRpb25zLmV4dHJhSGVhZGVycy5hdXRob3JpemF0aW9uID0gYHRva2VuICR7Z2l0aHViX3Rva2VuMX1gIDogb3B0aW9ucy5leHRyYUhlYWRlcnMgPSB7XG4gICAgICAgICAgICBhdXRob3JpemF0aW9uOiBgdG9rZW4gJHtnaXRodWJfdG9rZW4xfWBcbiAgICAgICAgfTtcbiAgICB9XG4gICAgbGV0IHVybCA9IGdpdGh1Yl9hcGlfdXJsMSArIGVuZHBvaW50O1xuICAgIGlmIChvcHRpb25zLnBhcmFtcykge1xuICAgICAgICB1cmwgKz0gYD8ke25ldyBVUkxTZWFyY2hQYXJhbXMob3B0aW9ucy5wYXJhbXMpfWA7XG4gICAgfVxuICAgIHJldHVybiBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgbWV0aG9kOiBvcHRpb25zLm1ldGhvZCxcbiAgICAgICAgYm9keTogb3B0aW9ucy5ib2R5LFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBhY2NlcHQ6IFwiYXBwbGljYXRpb24vdm5kLmdpdGh1Yi52Mytqc29uXCIsXG4gICAgICAgICAgICAuLi5vcHRpb25zLmV4dHJhSGVhZGVyc1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuZXhwb3J0IHsgZ2l0aHViX3Rva2VuMSBhcyBnaXRodWJfdG9rZW4gfTtcbmV4cG9ydCB7IGdpdGh1Yl9hcGlfdXJsMSBhcyBnaXRodWJfYXBpX3VybCB9O1xuZXhwb3J0IHsgc2V0VG9rZW4xIGFzIHNldFRva2VuIH07XG5leHBvcnQgeyBzZXRFbmRQb2ludDEgYXMgc2V0RW5kUG9pbnQgfTtcbmV4cG9ydCB7IGdldDEgYXMgZ2V0IH07XG5jbGFzcyBnaXRodWJFcnJvcjEgZXh0ZW5kcyBFcnJvciB7XG4gICAgc3RhdGljIG5vdEZvdW5kKHRoaW5nLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBuZXcgdGhpcyhgJHt0aGluZy50b1VwcGVyQ2FzZSgpfSBOT1QgRk9VTkQgXCIke2RhdGF9XCJgKTtcbiAgICB9XG59XG5leHBvcnQgeyBnaXRodWJFcnJvcjEgYXMgZ2l0aHViRXJyb3IgfTtcbmFzeW5jIGZ1bmN0aW9uIGdldFJlcG9zaXRvcnkxKG9yZywgcmVwbykge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IChhd2FpdCBnZXQxKGByZXBvcy8ke29yZ30vJHtyZXBvfWApKS5qc29uKCk7XG4gICAgaWYgKHJlcy5tZXNzYWdlKSB0aHJvdyBnaXRodWJFcnJvcjEubm90Rm91bmQoYFJFUE9TSVRPUllgLCBgJHtvcmd9LyR7cmVwb31gKTtcbiAgICByZXR1cm4gcmVzO1xufVxuYXN5bmMgZnVuY3Rpb24gZ2V0UmVwb3NpdG9yeUFydGlmYWN0czEob3JnLCByZXBvLCBvcHRpb25zKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgKGF3YWl0IGdldDEoYHJlcG9zLyR7b3JnfS8ke3JlcG99L2FjdGlvbnMvYXJ0aWZhY3RzYCwge1xuICAgICAgICBwYXJhbXM6IG9wdGlvbnNcbiAgICB9KSkuanNvbigpO1xuICAgIGlmIChyZXMubWVzc2FnZSkgdGhyb3cgZ2l0aHViRXJyb3IxLm5vdEZvdW5kKGBSRVBPU0lUT1JZYCwgYCR7b3JnfS8ke3JlcG99YCk7XG4gICAgcmV0dXJuIHJlcztcbn1cbmFzeW5jIGZ1bmN0aW9uIGdldFJlcG9zaXRvcnlBcnRpZmFjdDEob3JnLCByZXBvLCBpZCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IChhd2FpdCBnZXQxKGByZXBvcy8ke29yZ30vJHtyZXBvfS9hY3Rpb25zL2FydGlmYWN0cy8ke2lkfWApKS5qc29uKCk7XG4gICAgaWYgKHJlcy5tZXNzYWdlKSB0aHJvdyBnaXRodWJFcnJvcjEubm90Rm91bmQoYFJFUE9TSVRPUllgLCBgJHtvcmd9LyR7cmVwb31gKTtcbiAgICByZXR1cm4gcmVzO1xufVxuZXhwb3J0IHsgZ2V0UmVwb3NpdG9yeTEgYXMgZ2V0UmVwb3NpdG9yeSB9O1xuZXhwb3J0IHsgZ2V0UmVwb3NpdG9yeUFydGlmYWN0czEgYXMgZ2V0UmVwb3NpdG9yeUFydGlmYWN0cyB9O1xuZXhwb3J0IHsgZ2V0UmVwb3NpdG9yeUFydGlmYWN0MSBhcyBnZXRSZXBvc2l0b3J5QXJ0aWZhY3QgfTtcbmFzeW5jIGZ1bmN0aW9uIGdldFVzZXIxKHVzZXIpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCAoYXdhaXQgZ2V0MShgdXNlci8ke3VzZXJ9YCkpLmpzb24oKTtcbiAgICBpZiAocmVzLm1lc3NhZ2UpIHRocm93IGdpdGh1YkVycm9yMS5ub3RGb3VuZChcIlVTRVJcIiwgdXNlcik7XG4gICAgcmV0dXJuIHJlcztcbn1cbmV4cG9ydCB7IGdldFVzZXIxIGFzIGdldFVzZXIgfTtcbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUdpc3QxKG9wdGlvbnMpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCAoYXdhaXQgZ2V0MShgZ2lzdHNgLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMpLFxuICAgICAgICBuZWVkc1Rva2VuOiB0cnVlXG4gICAgfSkpLmpzb24oKTtcbiAgICByZXR1cm4gcmVzO1xufVxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlR2lzdDEoaWQsIG9wdGlvbnMpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCAoYXdhaXQgZ2V0MShgZ2lzdHMvJHtpZH1gLCB7XG4gICAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShvcHRpb25zKSxcbiAgICAgICAgbmVlZHNUb2tlbjogdHJ1ZVxuICAgIH0pKS5qc29uKCk7XG4gICAgcmV0dXJuIHJlcztcbn1cbmFzeW5jIGZ1bmN0aW9uIHZpZXdHaXN0czEob3B0aW9ucykge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IChhd2FpdCBnZXQxKGBnaXN0c2AsIHtcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICBuZWVkc1Rva2VuOiB0cnVlLFxuICAgICAgICBwYXJhbXM6IG9wdGlvbnNcbiAgICB9KSkuanNvbigpO1xuICAgIHJldHVybiByZXM7XG59XG5hc3luYyBmdW5jdGlvbiBnZXRHaXN0MShpZCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IChhd2FpdCBnZXQxKGBnaXN0cy8ke2lkfWApKS5qc29uKCk7XG4gICAgaWYgKHJlcy5tZXNzYWdlKSB0aHJvdyBnaXRodWJFcnJvcjEubm90Rm91bmQoYEdJU1RgLCBpZCk7XG4gICAgcmV0dXJuIHJlcztcbn1cbmFzeW5jIGZ1bmN0aW9uIGdldEdpc3RDb21taXRzMShpZCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IChhd2FpdCBnZXQxKGBnaXN0cy8ke2lkfS9jb21taXRzYCkpLmpzb24oKTtcbiAgICBpZiAocmVzLm1lc3NhZ2UpIHRocm93IGdpdGh1YkVycm9yMS5ub3RGb3VuZChgR0lTVGAsIGlkKTtcbiAgICByZXR1cm4gcmVzO1xufVxuYXN5bmMgZnVuY3Rpb24gZGVsZXRlR2lzdDEoaWQpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCAoYXdhaXQgZ2V0MShgZ2lzdHMvJHtpZH1gLCB7XG4gICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgICAgbmVlZHNUb2tlbjogdHJ1ZVxuICAgIH0pKS50ZXh0KCk7XG4gICAgaWYgKCFyZXMpIHJldHVybiB0cnVlO1xuICAgIGlmIChKU09OLnBhcnNlKHJlcykubWVzc2FnZSkgdGhyb3cgZ2l0aHViRXJyb3IxLm5vdEZvdW5kKGBHSVNUYCwgaWQpO1xuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydCB7IGNyZWF0ZUdpc3QxIGFzIGNyZWF0ZUdpc3QgfTtcbmV4cG9ydCB7IHVwZGF0ZUdpc3QxIGFzIHVwZGF0ZUdpc3QgfTtcbmV4cG9ydCB7IHZpZXdHaXN0czEgYXMgdmlld0dpc3RzIH07XG5leHBvcnQgeyBnZXRHaXN0MSBhcyBnZXRHaXN0IH07XG5leHBvcnQgeyBnZXRHaXN0Q29tbWl0czEgYXMgZ2V0R2lzdENvbW1pdHMgfTtcbmV4cG9ydCB7IGRlbGV0ZUdpc3QxIGFzIGRlbGV0ZUdpc3QgfTtcbnZhciBMYW5ndWFnZTE7XG4oZnVuY3Rpb24oTGFuZ3VhZ2UxKSB7XG4gICAgTGFuZ3VhZ2UxW1wiSFRNTFwiXSA9IFwiSFRNTFwiO1xuICAgIExhbmd1YWdlMVtcIkpTT05cIl0gPSBcIkpTT05cIjtcbiAgICBMYW5ndWFnZTFbXCJKYXZhU2NyaXB0XCJdID0gXCJKYXZhU2NyaXB0XCI7XG4gICAgTGFuZ3VhZ2UxW1wiTWFya2Rvd25cIl0gPSBcIk1hcmtkb3duXCI7XG4gICAgTGFuZ3VhZ2UxW1wiUHl0aG9uXCJdID0gXCJQeXRob25cIjtcbiAgICBMYW5ndWFnZTFbXCJTY3NzXCJdID0gXCJTQ1NTXCI7XG4gICAgTGFuZ3VhZ2UxW1wiU29saWRpdHlcIl0gPSBcIlNvbGlkaXR5XCI7XG4gICAgTGFuZ3VhZ2UxW1wiVGV4dFwiXSA9IFwiVGV4dFwiO1xuICAgIExhbmd1YWdlMVtcIlR5cGVTY3JpcHRcIl0gPSBcIlR5cGVTY3JpcHRcIjtcbn0pKExhbmd1YWdlMSB8fCAoTGFuZ3VhZ2UxID0ge1xufSkpO1xudmFyIEZpbGVUeXBlMTtcbihmdW5jdGlvbihGaWxlVHlwZTEpIHtcbiAgICBGaWxlVHlwZTFbXCJBcHBsaWNhdGlvbkpTT05cIl0gPSBcImFwcGxpY2F0aW9uL2pzb25cIjtcbiAgICBGaWxlVHlwZTFbXCJBcHBsaWNhdGlvbkphdmFzY3JpcHRcIl0gPSBcImFwcGxpY2F0aW9uL2phdmFzY3JpcHRcIjtcbiAgICBGaWxlVHlwZTFbXCJBcHBsaWNhdGlvblhQeXRob25cIl0gPSBcImFwcGxpY2F0aW9uL3gtcHl0aG9uXCI7XG4gICAgRmlsZVR5cGUxW1wiVGV4dEhUTUxcIl0gPSBcInRleHQvaHRtbFwiO1xuICAgIEZpbGVUeXBlMVtcIlRleHRNYXJrZG93blwiXSA9IFwidGV4dC9tYXJrZG93blwiO1xuICAgIEZpbGVUeXBlMVtcIlRleHRQbGFpblwiXSA9IFwidGV4dC9wbGFpblwiO1xuICAgIEZpbGVUeXBlMVtcIlZpZGVvTVAyVFwiXSA9IFwidmlkZW8vTVAyVFwiO1xufSkoRmlsZVR5cGUxIHx8IChGaWxlVHlwZTEgPSB7XG59KSk7XG52YXIgT3duZXJUeXBlMTtcbihmdW5jdGlvbihPd25lclR5cGUxKSB7XG4gICAgT3duZXJUeXBlMVtcIlVzZXJcIl0gPSBcIlVzZXJcIjtcbn0pKE93bmVyVHlwZTEgfHwgKE93bmVyVHlwZTEgPSB7XG59KSk7XG52YXIgTmFtZTE7XG4oZnVuY3Rpb24oTmFtZTEpIHtcbiAgICBOYW1lMVtcIkJ1aWxkQXJ0aWZhY3RzXCJdID0gXCJidWlsZC1hcnRpZmFjdHNcIjtcbn0pKE5hbWUxIHx8IChOYW1lMSA9IHtcbn0pKTtcbmV4cG9ydCB7IExhbmd1YWdlMSBhcyBMYW5ndWFnZSwgIH07XG5leHBvcnQgeyBGaWxlVHlwZTEgYXMgRmlsZVR5cGUsICB9O1xuZXhwb3J0IHsgT3duZXJUeXBlMSBhcyBPd25lclR5cGUsICB9O1xuZXhwb3J0IHsgTmFtZTEgYXMgTmFtZSwgIH07XG5cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUksZ0JBQWdCO0FBQ3BCLElBQUksa0JBQWtCO0FBQ3RCLE1BQU0sWUFBWSxDQUFDLFVBQVEsZ0JBQWdCO0FBRTNDLE1BQU0sZUFBZSxDQUFDLFFBQU0sa0JBQWtCO0FBRTlDLE1BQU0sV0FBVztBQUFBLEVBQ2IsUUFBUTtBQUFBLEVBQ1IsY0FBYztBQUFBO0FBR2xCLE1BQU0sT0FBTyxPQUFPLFVBQVUsVUFBVSxPQUNwQztBQUNBLFlBQVU7QUFBQSxPQUNIO0FBQUEsT0FDQTtBQUFBO0FBRVAsTUFBSSxDQUFDLFNBQVMsV0FBVztBQUFNLGVBQVcsTUFBTTtBQUNoRCxNQUFJLFFBQVEsY0FBYyxDQUFDLGVBQWU7QUFDdEMsVUFBTSxJQUFJLE1BQU0sR0FBRztBQUFBO0FBRXZCLE1BQUksZUFBZTtBQUNmLFlBQVEsZUFBZSxRQUFRLGFBQWEsZ0JBQWdCLFNBQVMsa0JBQWtCLFFBQVEsZUFBZTtBQUFBLE1BQzFHLGVBQWUsU0FBUztBQUFBO0FBQUE7QUFHaEMsTUFBSSxNQUFNLGtCQUFrQjtBQUM1QixNQUFJLFFBQVEsUUFBUTtBQUNoQixXQUFPLElBQUksSUFBSSxnQkFBZ0IsUUFBUTtBQUFBO0FBRTNDLFNBQU8sTUFBTSxNQUFNLEtBQUs7QUFBQSxJQUNwQixRQUFRLFFBQVE7QUFBQSxJQUNoQixNQUFNLFFBQVE7QUFBQSxJQUNkLFNBQVM7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
