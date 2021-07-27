var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
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
  if (options.needsToken && !github_token1)
    throw new Error(`${endpoint} REQUIRES A TOKEN`);
  if (github_token1)
    options.extraHeaders ? options.extraHeaders.authorization = `token ${github_token1}` : options.extraHeaders = {
      authorization: `token ${github_token1}`
    };
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
async function viewGists1(options) {
  const res = await (await get1(`gists`, {
    method: "GET",
    needsToken: true,
    params: options
  })).json();
  return res;
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
  viewGists
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZGlzdC9icm93c2VyLmJ1bmRsZS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsibGV0IGdpdGh1Yl90b2tlbjEgPSB1bmRlZmluZWQ7XG5sZXQgZ2l0aHViX2FwaV91cmwxID0gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20nO1xuY29uc3Qgc2V0VG9rZW4xID0gKHRva2VuKT0+Z2l0aHViX3Rva2VuMSA9IHRva2VuXG47XG5jb25zdCBzZXRFbmRQb2ludDEgPSAodXJsKT0+Z2l0aHViX2FwaV91cmwxID0gdXJsXG47XG5jb25zdCBkZWZhdWx0cyA9IHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGV4dHJhSGVhZGVyczoge1xuICAgIH1cbn07XG5jb25zdCBnZXQxID0gYXN5bmMgKGVuZHBvaW50LCBvcHRpb25zID0ge1xufSk9PntcbiAgICBvcHRpb25zID0ge1xuICAgICAgICAuLi5kZWZhdWx0cyxcbiAgICAgICAgLi4ub3B0aW9uc1xuICAgIH07XG4gICAgaWYgKCFlbmRwb2ludC5zdGFydHNXaXRoKCcvJykpIGVuZHBvaW50ID0gJy8nICsgZW5kcG9pbnQ7XG4gICAgaWYgKG9wdGlvbnMubmVlZHNUb2tlbiAmJiAhZ2l0aHViX3Rva2VuMSkgdGhyb3cgbmV3IEVycm9yKGAke2VuZHBvaW50fSBSRVFVSVJFUyBBIFRPS0VOYCk7XG4gICAgaWYgKGdpdGh1Yl90b2tlbjEpIG9wdGlvbnMuZXh0cmFIZWFkZXJzID8gb3B0aW9ucy5leHRyYUhlYWRlcnMuYXV0aG9yaXphdGlvbiA9IGB0b2tlbiAke2dpdGh1Yl90b2tlbjF9YCA6IG9wdGlvbnMuZXh0cmFIZWFkZXJzID0ge1xuICAgICAgICBhdXRob3JpemF0aW9uOiBgdG9rZW4gJHtnaXRodWJfdG9rZW4xfWBcbiAgICB9O1xuICAgIGxldCB1cmwgPSBnaXRodWJfYXBpX3VybDEgKyBlbmRwb2ludDtcbiAgICBpZiAob3B0aW9ucy5wYXJhbXMpIHtcbiAgICAgICAgdXJsICs9IGA/JHtuZXcgVVJMU2VhcmNoUGFyYW1zKG9wdGlvbnMucGFyYW1zKX1gO1xuICAgIH1cbiAgICByZXR1cm4gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgIG1ldGhvZDogb3B0aW9ucy5tZXRob2QsXG4gICAgICAgIGJvZHk6IG9wdGlvbnMuYm9keSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgYWNjZXB0OiAnYXBwbGljYXRpb24vdm5kLmdpdGh1Yi52Mytqc29uJyxcbiAgICAgICAgICAgIC4uLm9wdGlvbnMuZXh0cmFIZWFkZXJzXG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5leHBvcnQgeyBnaXRodWJfdG9rZW4xIGFzIGdpdGh1Yl90b2tlbiB9O1xuZXhwb3J0IHsgZ2l0aHViX2FwaV91cmwxIGFzIGdpdGh1Yl9hcGlfdXJsIH07XG5leHBvcnQgeyBzZXRUb2tlbjEgYXMgc2V0VG9rZW4gfTtcbmV4cG9ydCB7IHNldEVuZFBvaW50MSBhcyBzZXRFbmRQb2ludCB9O1xuZXhwb3J0IHsgZ2V0MSBhcyBnZXQgfTtcbmNsYXNzIGdpdGh1YkVycm9yMSBleHRlbmRzIEVycm9yIHtcbiAgICBzdGF0aWMgbm90Rm91bmQodGhpbmcsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzKGAke3RoaW5nLnRvVXBwZXJDYXNlKCl9IE5PVCBGT1VORCBcIiR7ZGF0YX1cImApO1xuICAgIH1cbn1cbmV4cG9ydCB7IGdpdGh1YkVycm9yMSBhcyBnaXRodWJFcnJvciB9O1xuYXN5bmMgZnVuY3Rpb24gZ2V0UmVwb3NpdG9yeTEob3JnLCByZXBvKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgKGF3YWl0IGdldDEoYHJlcG9zLyR7b3JnfS8ke3JlcG99YCkpLmpzb24oKTtcbiAgICBpZiAocmVzLm1lc3NhZ2UpIHRocm93IGdpdGh1YkVycm9yMS5ub3RGb3VuZChgUkVQT1NJVE9SWWAsIGAke29yZ30vJHtyZXBvfWApO1xuICAgIHJldHVybiByZXM7XG59XG5leHBvcnQgeyBnZXRSZXBvc2l0b3J5MSBhcyBnZXRSZXBvc2l0b3J5IH07XG5hc3luYyBmdW5jdGlvbiBnZXRVc2VyMSh1c2VyKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgKGF3YWl0IGdldDEoYHVzZXIvJHt1c2VyfWApKS5qc29uKCk7XG4gICAgaWYgKHJlcy5tZXNzYWdlKSB0aHJvdyBnaXRodWJFcnJvcjEubm90Rm91bmQoJ1VTRVInLCB1c2VyKTtcbiAgICByZXR1cm4gcmVzO1xufVxuZXhwb3J0IHsgZ2V0VXNlcjEgYXMgZ2V0VXNlciB9O1xuYXN5bmMgZnVuY3Rpb24gY3JlYXRlR2lzdDEob3B0aW9ucykge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IChhd2FpdCBnZXQxKGBnaXN0c2AsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMpLFxuICAgICAgICBuZWVkc1Rva2VuOiB0cnVlXG4gICAgfSkpLmpzb24oKTtcbiAgICByZXR1cm4gcmVzO1xufVxuYXN5bmMgZnVuY3Rpb24gdmlld0dpc3RzMShvcHRpb25zKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgKGF3YWl0IGdldDEoYGdpc3RzYCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBuZWVkc1Rva2VuOiB0cnVlLFxuICAgICAgICBwYXJhbXM6IG9wdGlvbnNcbiAgICB9KSkuanNvbigpO1xuICAgIHJldHVybiByZXM7XG59XG5leHBvcnQgeyBjcmVhdGVHaXN0MSBhcyBjcmVhdGVHaXN0IH07XG5leHBvcnQgeyB2aWV3R2lzdHMxIGFzIHZpZXdHaXN0cyB9O1xudmFyIExhbmd1YWdlMTtcbihmdW5jdGlvbihMYW5ndWFnZTEpIHtcbiAgICBMYW5ndWFnZTFbXCJIVE1MXCJdID0gJ0hUTUwnO1xuICAgIExhbmd1YWdlMVtcIkpTT05cIl0gPSAnSlNPTic7XG4gICAgTGFuZ3VhZ2UxW1wiSmF2YVNjcmlwdFwiXSA9ICdKYXZhU2NyaXB0JztcbiAgICBMYW5ndWFnZTFbXCJNYXJrZG93blwiXSA9ICdNYXJrZG93bic7XG4gICAgTGFuZ3VhZ2UxW1wiUHl0aG9uXCJdID0gJ1B5dGhvbic7XG4gICAgTGFuZ3VhZ2UxW1wiU2Nzc1wiXSA9ICdTQ1NTJztcbiAgICBMYW5ndWFnZTFbXCJTb2xpZGl0eVwiXSA9ICdTb2xpZGl0eSc7XG4gICAgTGFuZ3VhZ2UxW1wiVGV4dFwiXSA9ICdUZXh0JztcbiAgICBMYW5ndWFnZTFbXCJUeXBlU2NyaXB0XCJdID0gJ1R5cGVTY3JpcHQnO1xufSkoTGFuZ3VhZ2UxIHx8IChMYW5ndWFnZTEgPSB7XG59KSk7XG52YXIgRmlsZVR5cGUxO1xuKGZ1bmN0aW9uKEZpbGVUeXBlMSkge1xuICAgIEZpbGVUeXBlMVtcIkFwcGxpY2F0aW9uSlNPTlwiXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICBGaWxlVHlwZTFbXCJBcHBsaWNhdGlvbkphdmFzY3JpcHRcIl0gPSAnYXBwbGljYXRpb24vamF2YXNjcmlwdCc7XG4gICAgRmlsZVR5cGUxW1wiQXBwbGljYXRpb25YUHl0aG9uXCJdID0gJ2FwcGxpY2F0aW9uL3gtcHl0aG9uJztcbiAgICBGaWxlVHlwZTFbXCJUZXh0SFRNTFwiXSA9ICd0ZXh0L2h0bWwnO1xuICAgIEZpbGVUeXBlMVtcIlRleHRNYXJrZG93blwiXSA9ICd0ZXh0L21hcmtkb3duJztcbiAgICBGaWxlVHlwZTFbXCJUZXh0UGxhaW5cIl0gPSAndGV4dC9wbGFpbic7XG4gICAgRmlsZVR5cGUxW1wiVmlkZW9NUDJUXCJdID0gJ3ZpZGVvL01QMlQnO1xufSkoRmlsZVR5cGUxIHx8IChGaWxlVHlwZTEgPSB7XG59KSk7XG52YXIgT3duZXJUeXBlMTtcbihmdW5jdGlvbihPd25lclR5cGUxKSB7XG4gICAgT3duZXJUeXBlMVtcIlVzZXJcIl0gPSBcIlVzZXJcIjtcbn0pKE93bmVyVHlwZTEgfHwgKE93bmVyVHlwZTEgPSB7XG59KSk7XG5leHBvcnQgeyBMYW5ndWFnZTEgYXMgTGFuZ3VhZ2UsICB9O1xuZXhwb3J0IHsgRmlsZVR5cGUxIGFzIEZpbGVU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
