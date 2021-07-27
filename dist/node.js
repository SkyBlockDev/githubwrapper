var __defProp = Object.defineProperty;
var __markAsModule = (target) =>
  __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all) {
    __defProp(target, name, { get: all[name], enumerable: true });
  }
};
__export(exports, {
  FileType: () => FileType1,
  Language: () => Language1,
  OwnerType: () => OwnerType1,
  createGist: () => createGist1,
  get: () => get1,
  getRepository: () => getRepository1,
  getUser: () => getUser1,
  githubError: () => githubError1,
  github_api_url: () => github_api_url1,
  github_token: () => github_token1,
  setEndPoint: () => setEndPoint1,
  setToken: () => setToken1,
  viewGists: () => viewGists1,
});
let github_token1 = void 0;
let github_api_url1 = "https://api.github.com";
const setToken1 = (token) => (github_token1 = token);
const setEndPoint1 = (url) => (github_api_url1 = url);
const defaults = {
  method: "GET",
  extraHeaders: {},
};
const get1 = async (endpoint, options = {}) => {
  options = {
    ...defaults,
    ...options,
  };
  if (!endpoint.startsWith("/")) {
    endpoint = "/" + endpoint;
  }
  if (options.needsToken && !github_token1) {
    throw new Error(`${endpoint} REQUIRES A TOKEN`);
  }
  if (github_token1) {
    options.extraHeaders
      ? (options.extraHeaders.authorization = `token ${github_token1}`)
      : (options.extraHeaders = {
          authorization: `token ${github_token1}`,
        });
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
      ...options.extraHeaders,
    },
  });
};
class githubError1 extends Error {
  static notFound(thing, data) {
    return new this(`${thing.toUpperCase()} NOT FOUND "${data}"`);
  }
}
async function getRepository1(org, repo) {
  const res = await (await get1(`repos/${org}/${repo}`)).json();
  if (res.message) {
    throw githubError1.notFound(`REPOSITORY`, `${org}/${repo}`);
  }
  return res;
}
async function getUser1(user) {
  const res = await (await get1(`user/${user}`)).json();
  if (res.message) {
    throw githubError1.notFound("USER", user);
  }
  return res;
}
async function createGist1(options) {
  const res = await (
    await get1(`gists`, {
      method: "POST",
      body: JSON.stringify(options),
      needsToken: true,
    })
  ).json();
  return res;
}
async function viewGists1(options) {
  const res = await (
    await get1(`gists`, {
      method: "GET",
      needsToken: true,
      params: options,
    })
  ).json();
  return res;
}
var Language1;
(function (Language12) {
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
(function (FileType12) {
  FileType12["ApplicationJSON"] = "application/json";
  FileType12["ApplicationJavascript"] = "application/javascript";
  FileType12["ApplicationXPython"] = "application/x-python";
  FileType12["TextHTML"] = "text/html";
  FileType12["TextMarkdown"] = "text/markdown";
  FileType12["TextPlain"] = "text/plain";
  FileType12["VideoMP2T"] = "video/MP2T";
})(FileType1 || (FileType1 = {}));
var OwnerType1;
(function (OwnerType12) {
  OwnerType12["User"] = "User";
})(OwnerType1 || (OwnerType1 = {}));
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    FileType,
    Language,
    OwnerType,
    createGist,
    get,
    getRepository,
    getUser,
    githubError,
    github_api_url,
    github_token,
    setEndPoint,
    setToken,
    viewGists,
  });
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiYnJvd3Nlci5idW5kbGUuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImxldCBnaXRodWJfdG9rZW4xID0gdW5kZWZpbmVkO1xubGV0IGdpdGh1Yl9hcGlfdXJsMSA9ICdodHRwczovL2FwaS5naXRodWIuY29tJztcbmNvbnN0IHNldFRva2VuMSA9ICh0b2tlbik9PmdpdGh1Yl90b2tlbjEgPSB0b2tlblxuO1xuY29uc3Qgc2V0RW5kUG9pbnQxID0gKHVybCk9PmdpdGh1Yl9hcGlfdXJsMSA9IHVybFxuO1xuY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBleHRyYUhlYWRlcnM6IHtcbiAgICB9XG59O1xuY29uc3QgZ2V0MSA9IGFzeW5jIChlbmRwb2ludCwgb3B0aW9ucyA9IHtcbn0pPT57XG4gICAgb3B0aW9ucyA9IHtcbiAgICAgICAgLi4uZGVmYXVsdHMsXG4gICAgICAgIC4uLm9wdGlvbnNcbiAgICB9O1xuICAgIGlmICghZW5kcG9pbnQuc3RhcnRzV2l0aCgnLycpKSBlbmRwb2ludCA9ICcvJyArIGVuZHBvaW50O1xuICAgIGlmIChvcHRpb25zLm5lZWRzVG9rZW4gJiYgIWdpdGh1Yl90b2tlbjEpIHRocm93IG5ldyBFcnJvcihgJHtlbmRwb2ludH0gUkVRVUlSRVMgQSBUT0tFTmApO1xuICAgIGlmIChnaXRodWJfdG9rZW4xKSBvcHRpb25zLmV4dHJhSGVhZGVycyA/IG9wdGlvbnMuZXh0cmFIZWFkZXJzLmF1dGhvcml6YXRpb24gPSBgdG9rZW4gJHtnaXRodWJfdG9rZW4xfWAgOiBvcHRpb25zLmV4dHJhSGVhZGVycyA9IHtcbiAgICAgICAgYXV0aG9yaXphdGlvbjogYHRva2VuICR7Z2l0aHViX3Rva2VuMX1gXG4gICAgfTtcbiAgICBsZXQgdXJsID0gZ2l0aHViX2FwaV91cmwxICsgZW5kcG9pbnQ7XG4gICAgaWYgKG9wdGlvbnMucGFyYW1zKSB7XG4gICAgICAgIHVybCArPSBgPyR7bmV3IFVSTFNlYXJjaFBhcmFtcyhvcHRpb25zLnBhcmFtcyl9YDtcbiAgICB9XG4gICAgcmV0dXJuIGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICBtZXRob2Q6IG9wdGlvbnMubWV0aG9kLFxuICAgICAgICBib2R5OiBvcHRpb25zLmJvZHksXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIGFjY2VwdDogJ2FwcGxpY2F0aW9uL3ZuZC5naXRodWIudjMranNvbicsXG4gICAgICAgICAgICAuLi5vcHRpb25zLmV4dHJhSGVhZGVyc1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuZXhwb3J0IHsgZ2l0aHViX3Rva2VuMSBhcyBnaXRodWJfdG9rZW4gfTtcbmV4cG9ydCB7IGdpdGh1Yl9hcGlfdXJsMSBhcyBnaXRodWJfYXBpX3VybCB9O1xuZXhwb3J0IHsgc2V0VG9rZW4xIGFzIHNldFRva2VuIH07XG5leHBvcnQgeyBzZXRFbmRQb2ludDEgYXMgc2V0RW5kUG9pbnQgfTtcbmV4cG9ydCB7IGdldDEgYXMgZ2V0IH07XG5jbGFzcyBnaXRodWJFcnJvcjEgZXh0ZW5kcyBFcnJvciB7XG4gICAgc3RhdGljIG5vdEZvdW5kKHRoaW5nLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBuZXcgdGhpcyhgJHt0aGluZy50b1VwcGVyQ2FzZSgpfSBOT1QgRk9VTkQgXCIke2RhdGF9XCJgKTtcbiAgICB9XG59XG5leHBvcnQgeyBnaXRodWJFcnJvcjEgYXMgZ2l0aHViRXJyb3IgfTtcbmFzeW5jIGZ1bmN0aW9uIGdldFJlcG9zaXRvcnkxKG9yZywgcmVwbykge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IChhd2FpdCBnZXQxKGByZXBvcy8ke29yZ30vJHtyZXBvfWApKS5qc29uKCk7XG4gICAgaWYgKHJlcy5tZXNzYWdlKSB0aHJvdyBnaXRodWJFcnJvcjEubm90Rm91bmQoYFJFUE9TSVRPUllgLCBgJHtvcmd9LyR7cmVwb31gKTtcbiAgICByZXR1cm4gcmVzO1xufVxuZXhwb3J0IHsgZ2V0UmVwb3NpdG9yeTEgYXMgZ2V0UmVwb3NpdG9yeSB9O1xuYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcjEodXNlcikge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IChhd2FpdCBnZXQxKGB1c2VyLyR7dXNlcn1gKSkuanNvbigpO1xuICAgIGlmIChyZXMubWVzc2FnZSkgdGhyb3cgZ2l0aHViRXJyb3IxLm5vdEZvdW5kKCdVU0VSJywgdXNlcik7XG4gICAgcmV0dXJuIHJlcztcbn1cbmV4cG9ydCB7IGdldFVzZXIxIGFzIGdldFVzZXIgfTtcbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUdpc3QxKG9wdGlvbnMpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCAoYXdhaXQgZ2V0MShgZ2lzdHNgLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShvcHRpb25zKSxcbiAgICAgICAgbmVlZHNUb2tlbjogdHJ1ZVxuICAgIH0pKS5qc29uKCk7XG4gICAgcmV0dXJuIHJlcztcbn1cbmFzeW5jIGZ1bmN0aW9uIHZpZXdHaXN0czEob3B0aW9ucykge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IChhd2FpdCBnZXQxKGBnaXN0c2AsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgbmVlZHNUb2tlbjogdHJ1ZSxcbiAgICAgICAgcGFyYW1zOiBvcHRpb25zXG4gICAgfSkpLmpzb24oKTtcbiAgICByZXR1cm4gcmVzO1xufVxuZXhwb3J0IHsgY3JlYXRlR2lzdDEgYXMgY3JlYXRlR2lzdCB9O1xuZXhwb3J0IHsgdmlld0dpc3RzMSBhcyB2aWV3R2lzdHMgfTtcbnZhciBMYW5ndWFnZTE7XG4oZnVuY3Rpb24oTGFuZ3VhZ2UxKSB7XG4gICAgTGFuZ3VhZ2UxW1wiSFRNTFwiXSA9ICdIVE1MJztcbiAgICBMYW5ndWFnZTFbXCJKU09OXCJdID0gJ0pTT04nO1xuICAgIExhbmd1YWdlMVtcIkphdmFTY3JpcHRcIl0gPSAnSmF2YVNjcmlwdCc7XG4gICAgTGFuZ3VhZ2UxW1wiTWFya2Rvd25cIl0gPSAnTWFya2Rvd24nO1xuICAgIExhbmd1YWdlMVtcIlB5dGhvblwiXSA9ICdQeXRob24nO1xuICAgIExhbmd1YWdlMVtcIlNjc3NcIl0gPSAnU0NTUyc7XG4gICAgTGFuZ3VhZ2UxW1wiU29saWRpdHlcIl0gPSAnU29saWRpdHknO1xuICAgIExhbmd1YWdlMVtcIlRleHRcIl0gPSAnVGV4dCc7XG4gICAgTGFuZ3VhZ2UxW1wiVHlwZVNjcmlwdFwiXSA9ICdUeXBlU2NyaXB0Jztcbn0pKExhbmd1YWdlMSB8fCAoTGFuZ3VhZ2UxID0ge1xufSkpO1xudmFyIEZpbGVUeXBlMTtcbihmdW5jdGlvbihGaWxlVHlwZTEpIHtcbiAgICBGaWxlVHlwZTFbXCJBcHBsaWNhdGlvbkpTT05cIl0gPSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgRmlsZVR5cGUxW1wiQXBwbGljYXRpb25KYXZhc2NyaXB0XCJdID0gJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnO1xuICAgIEZpbGVUeXBlMVtcIkFwcGxpY2F0aW9uWFB5dGhvblwiXSA9ICdhcHBsaWNhdGlvbi94LXB5dGhvbic7XG4gICAgRmlsZVR5cGUxW1wiVGV4dEhUTUxcIl0gPSAndGV4dC9odG1sJztcbiAgICBGaWxlVHlwZTFbXCJUZXh0TWFya2Rvd25cIl0gPSAndGV4dC9tYXJrZG93bic7XG4gICAgRmlsZVR5cGUxW1wiVGV4dFBsYWluXCJdID0gJ3RleHQvcGxhaW4nO1xuICAgIEZpbGVUeXBlMVtcIlZpZGVvTVAyVFwiXSA9ICd2aWRlby9NUDJUJztcbn0pKEZpbGVUeXBlMSB8fCAoRmlsZVR5cGUxID0ge1xufSkpO1xudmFyIE93bmVyVHlwZTE7XG4oZnVuY3Rpb24oT3duZXJUeXBlMSkge1xuICAgIE93bmVyVHlwZTFbXCJVc2VyXCJdID0gXCJVc2VyXCI7XG59KShPd25lclR5cGUxIHx8IChPd25lclR5cGUxID0ge1xufSkpO1xuZXhwb3J0IHsgTGFuZ3VhZ2UxIGFzIExhbmd1YWdlLCAgfTtcbmV4cG9ydCB7IEZpbGVUeXBlMSBhcyBGaWxlVHlwZSwg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
