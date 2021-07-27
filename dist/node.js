globalThis.fetch ??= require?.("node-fetch");var __defProp = Object.defineProperty;
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
  deleteGist: () => deleteGist1,
  get: () => get1,
  getGist: () => getGist1,
  getGistCommits: () => getGistCommits1,
  getRepository: () => getRepository1,
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FileType,
  Language,
  OwnerType,
  createGist,
  deleteGist,
  get,
  getGist,
  getGistCommits,
  getRepository,
  getUser,
  githubError,
  github_api_url,
  github_token,
  setEndPoint,
  setToken,
  updateGist,
  viewGists
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiYnJvd3Nlci5idW5kbGUuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImxldCBnaXRodWJfdG9rZW4xID0gdW5kZWZpbmVkO1xubGV0IGdpdGh1Yl9hcGlfdXJsMSA9ICdodHRwczovL2FwaS5naXRodWIuY29tJztcbmNvbnN0IHNldFRva2VuMSA9ICh0b2tlbik9PmdpdGh1Yl90b2tlbjEgPSB0b2tlblxuO1xuY29uc3Qgc2V0RW5kUG9pbnQxID0gKHVybCk9PmdpdGh1Yl9hcGlfdXJsMSA9IHVybFxuO1xuY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBleHRyYUhlYWRlcnM6IHtcbiAgICB9XG59O1xuY29uc3QgZ2V0MSA9IGFzeW5jIChlbmRwb2ludCwgb3B0aW9ucyA9IHtcbn0pPT57XG4gICAgb3B0aW9ucyA9IHtcbiAgICAgICAgLi4uZGVmYXVsdHMsXG4gICAgICAgIC4uLm9wdGlvbnNcbiAgICB9O1xuICAgIGlmICghZW5kcG9pbnQuc3RhcnRzV2l0aCgnLycpKSBlbmRwb2ludCA9ICcvJyArIGVuZHBvaW50O1xuICAgIGlmIChvcHRpb25zLm5lZWRzVG9rZW4gJiYgIWdpdGh1Yl90b2tlbjEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2VuZHBvaW50fSBSRVFVSVJFUyBBIFRPS0VOYCk7XG4gICAgfVxuICAgIGlmIChnaXRodWJfdG9rZW4xKSB7XG4gICAgICAgIG9wdGlvbnMuZXh0cmFIZWFkZXJzID8gb3B0aW9ucy5leHRyYUhlYWRlcnMuYXV0aG9yaXphdGlvbiA9IGB0b2tlbiAke2dpdGh1Yl90b2tlbjF9YCA6IG9wdGlvbnMuZXh0cmFIZWFkZXJzID0ge1xuICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogYHRva2VuICR7Z2l0aHViX3Rva2VuMX1gXG4gICAgICAgIH07XG4gICAgfVxuICAgIGxldCB1cmwgPSBnaXRodWJfYXBpX3VybDEgKyBlbmRwb2ludDtcbiAgICBpZiAob3B0aW9ucy5wYXJhbXMpIHtcbiAgICAgICAgdXJsICs9IGA/JHtuZXcgVVJMU2VhcmNoUGFyYW1zKG9wdGlvbnMucGFyYW1zKX1gO1xuICAgIH1cbiAgICByZXR1cm4gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgIG1ldGhvZDogb3B0aW9ucy5tZXRob2QsXG4gICAgICAgIGJvZHk6IG9wdGlvbnMuYm9keSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgYWNjZXB0OiAnYXBwbGljYXRpb24vdm5kLmdpdGh1Yi52Mytqc29uJyxcbiAgICAgICAgICAgIC4uLm9wdGlvbnMuZXh0cmFIZWFkZXJzXG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5leHBvcnQgeyBnaXRodWJfdG9rZW4xIGFzIGdpdGh1Yl90b2tlbiB9O1xuZXhwb3J0IHsgZ2l0aHViX2FwaV91cmwxIGFzIGdpdGh1Yl9hcGlfdXJsIH07XG5leHBvcnQgeyBzZXRUb2tlbjEgYXMgc2V0VG9rZW4gfTtcbmV4cG9ydCB7IHNldEVuZFBvaW50MSBhcyBzZXRFbmRQb2ludCB9O1xuZXhwb3J0IHsgZ2V0MSBhcyBnZXQgfTtcbmNsYXNzIGdpdGh1YkVycm9yMSBleHRlbmRzIEVycm9yIHtcbiAgICBzdGF0aWMgbm90Rm91bmQodGhpbmcsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzKGAke3RoaW5nLnRvVXBwZXJDYXNlKCl9IE5PVCBGT1VORCBcIiR7ZGF0YX1cImApO1xuICAgIH1cbn1cbmV4cG9ydCB7IGdpdGh1YkVycm9yMSBhcyBnaXRodWJFcnJvciB9O1xuYXN5bmMgZnVuY3Rpb24gZ2V0UmVwb3NpdG9yeTEob3JnLCByZXBvKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgKGF3YWl0IGdldDEoYHJlcG9zLyR7b3JnfS8ke3JlcG99YCkpLmpzb24oKTtcbiAgICBpZiAocmVzLm1lc3NhZ2UpIHRocm93IGdpdGh1YkVycm9yMS5ub3RGb3VuZChgUkVQT1NJVE9SWWAsIGAke29yZ30vJHtyZXBvfWApO1xuICAgIHJldHVybiByZXM7XG59XG5leHBvcnQgeyBnZXRSZXBvc2l0b3J5MSBhcyBnZXRSZXBvc2l0b3J5IH07XG5hc3luYyBmdW5jdGlvbiBnZXRVc2VyMSh1c2VyKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgKGF3YWl0IGdldDEoYHVzZXIvJHt1c2VyfWApKS5qc29uKCk7XG4gICAgaWYgKHJlcy5tZXNzYWdlKSB0aHJvdyBnaXRodWJFcnJvcjEubm90Rm91bmQoJ1VTRVInLCB1c2VyKTtcbiAgICByZXR1cm4gcmVzO1xufVxuZXhwb3J0IHsgZ2V0VXNlcjEgYXMgZ2V0VXNlciB9O1xuYXN5bmMgZnVuY3Rpb24gY3JlYXRlR2lzdDEob3B0aW9ucykge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IChhd2FpdCBnZXQxKGBnaXN0c2AsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMpLFxuICAgICAgICBuZWVkc1Rva2VuOiB0cnVlXG4gICAgfSkpLmpzb24oKTtcbiAgICByZXR1cm4gcmVzO1xufVxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlR2lzdDEoaWQsIG9wdGlvbnMpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCAoYXdhaXQgZ2V0MShgZ2lzdHMvJHtpZH1gLCB7XG4gICAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob3B0aW9ucyksXG4gICAgICAgIG5lZWRzVG9rZW46IHRydWVcbiAgICB9KSkuanNvbigpO1xuICAgIHJldHVybiByZXM7XG59XG5hc3luYyBmdW5jdGlvbiB2aWV3R2lzdHMxKG9wdGlvbnMpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCAoYXdhaXQgZ2V0MShgZ2lzdHNgLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIG5lZWRzVG9rZW46IHRydWUsXG4gICAgICAgIHBhcmFtczogb3B0aW9uc1xuICAgIH0pKS5qc29uKCk7XG4gICAgcmV0dXJuIHJlcztcbn1cbmFzeW5jIGZ1bmN0aW9uIGdldEdpc3QxKGlkKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgKGF3YWl0IGdldDEoYGdpc3RzLyR7aWR9YCkpLmpzb24oKTtcbiAgICBpZiAocmVzLm1lc3NhZ2UpIHRocm93IGdpdGh1YkVycm9yMS5ub3RGb3VuZChgR0lTVGAsIGlkKTtcbiAgICByZXR1cm4gcmVzO1xufVxuYXN5bmMgZnVuY3Rpb24gZ2V0R2lzdENvbW1pdHMxKGlkKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgKGF3YWl0IGdldDEoYGdpc3RzLyR7aWR9L2NvbW1pdHNgKSkuanNvbigpO1xuICAgIGlmIChyZXMubWVzc2FnZSkgdGhyb3cgZ2l0aHViRXJyb3IxLm5vdEZvdW5kKGBHSVNUYCwgaWQpO1xuICAgIHJldHVybiByZXM7XG59XG5hc3luYyBmdW5jdGlvbiBkZWxldGVHaXN0MShpZCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IChhd2FpdCBnZXQxKGBnaXN0cy8ke2lkfWAsIHtcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgbmVlZHNUb2tlbjogdHJ1ZVxuICAgIH0pKS50ZXh0KCk7XG4gICAgaWYgKCFyZXMpIHJldHVybiB0cnVlO1xuICAgIGlmIChKU09OLnBhcnNlKHJlcykubWVzc2FnZSkgdGhyb3cgZ2l0aHViRXJyb3IxLm5vdEZvdW5kKGBHSVNUYCwgaWQpO1xuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydCB7IGNyZWF0ZUdpc3QxIGFzIGNyZWF0ZUdpc3QgfTtcbmV4cG9ydCB7IHVwZGF0ZUdpc3QxIGFzIHVwZGF0ZUdpc3QgfTtcbmV4cG9ydCB7IHZpZXdHaXN0czEgYXMgdmlld0dpc3RzIH07XG5leHBvcnQgeyBnZXRHaXN0MSBhcyBnZXRHaXN0IH07XG5leHBvcnQgeyBnZXRHaXN0Q29tbWl0czEgYXMgZ2V0R2lzdENvbW1pdHMgfTtcbmV4cG9ydCB7IGRlbGV0ZUdpc3QxIGFzIGRlbGV0ZUdpc3QgfTtcbnZhciBMYW5ndWFnZTE7XG4oZnVuY3Rpb24oTGFuZ3VhZ2UxKSB7XG4gICAgTGFuZ3VhZ2UxW1wiSFRNTFwiXSA9ICdIVE1MJztcbiAgICBMYW5ndWFnZTFbXCJKU09OXCJdID0gJ0pTT04nO1xuICAgIExhbmd1YWdlMVtcIkphdmFTY3JpcHRcIl0gPSAnSmF2YVNjcmlwdCc7XG4gICAgTGFuZ3VhZ2UxW1wiTWFya2Rvd25cIl0gPSAnTWFya2Rvd24nO1xuICAgIExhbmd1YWdlMVtcIlB5dGhvblwiXSA9ICdQeXRob24nO1xuICAgIExhbmd1YWdlMVtcIlNjc3NcIl0gPSAnU0NTUyc7XG4gICAgTGFuZ3VhZ2UxW1wiU29saWRpdHlcIl0gPSAnU29saWRpdHknO1xuICAgIExhbmd1YWdlMVtcIlRleHRcIl0gPSAnVGV4dCc7XG4gICAgTGFuZ3VhZ2UxW1wiVHlwZVNjcmlwdFwiXSA9ICdUeXBlU2NyaXB0Jztcbn0pKExhbmd1YWdlMSB8fCAoTGFuZ3VhZ2UxID0ge1xufSkpO1xudmFyIEZpbGVUeXBlMTtcbihmdW5jdGlvbihGaWxlVHlwZTEpIHtcbiAgICBGaWxlVHlwZTFbXCJBcHBsaWNhdGlvbkpTT05cIl0gPSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgRmlsZVR5cGUxW1wiQXBwbGljYXRpb25KYXZhc2NyaXB0XCJdID0gJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnO1xuICAgIEZpbGVUeXBlMVtcIkFwcGxpY2F0aW9uWFB5dGhvblwiXSA9ICdhcHBsaWNhdGlvbi94LXB5dGhvbic7XG4gICAgRmlsZVR5cGUxW1wiVGV4dEhUTUxcIl0gPSAndGV4dC9odG1sJztcbiAgICBGaWxlVHlwZTFbXCJUZXh0TWFya2Rvd25cIl0gPSAndGV4dC9tYXJrZG93bic7XG4gICAgRmlsZVR5cGUxW1wiVGV4dFBsYWluXCJdID0gJ3RleHQvcGxhaW4nO1xuICAgIEZpbGVUeXBlMVtcIlZpZGVvTVAyVFwiXSA9ICd2aWRlby9NUDJUJztcbn0pKEZpbGVUeXBlMSB8fCAoRmlsZVR5cGUxID0ge1xufSkpO1xudmFyIE93bmVyVHlwZTE7XG4oZnVuY3Rpb24oT3duZXJUeXBlMSkge1xuICAgIE93bmVyVHlwZTFbXCJVc2VyXCJdID0gXCJVc2VyXCI7XG59KShPd25lclR5cGUxIHx8IChPd25lclR5cGUxID0ge1xufSkpO1xuZXhwb3J0IHsgTGFuZ3VhZ2UxIGFzIExhbmd1YWdlLCAgfTtcbmV4cG9ydCB7IEZpbGVUeXBlMSBhcyBGaWxlVHlwZSwgIH07XG5leHBvcnQgeyBPd25lclR5cGUxIGFzIE93bmVyVHlwZSwgIH07XG5cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUksZ0JBQWdCO0FBQ3BCLElBQUksa0JBQWtCO0FBQ3RCLE1BQU0sWUFBWSxDQUFDLFVBQVEsZ0JBQWdCO0FBRTNDLE1BQU0sZUFBZSxDQUFDLFFBQU0sa0JBQWtCO0FBRTlDLE1BQU0sV0FBVztBQUFBLEVBQ2IsUUFBUTtBQUFBLEVBQ1IsY0FBYztBQUFBO0FBR2xCLE1BQU0sT0FBTyxPQUFPLFVBQVUsVUFBVSxPQUNwQztBQUNBLFlBQVU7QUFBQSxPQUNIO0FBQUEsT0FDQTtBQUFBO0FBRVAsTUFBSSxDQUFDLFNBQVMsV0FBVztBQUFNLGVBQVcsTUFBTTtBQUNoRCxNQUFJLFFBQVEsY0FBYyxDQUFDLGVBQWU7QUFDdEMsVUFBTSxJQUFJLE1BQU0sR0FBRztBQUFBO0FBRXZCLE1BQUksZUFBZTtBQUNmLFlBQVEsZUFBZSxRQUFRLGFBQWEsZ0JBQWdCLFNBQVMsa0JBQWtCLFFBQVEsZUFBZTtBQUFBLE1BQzFHLGVBQWUsU0FBUztBQUFBO0FBQUE7QUFHaEMsTUFBSSxNQUFNLGtCQUFrQjtBQUM1QixNQUFJLFFBQVEsUUFBUTtBQUNoQixXQUFPLElBQUksSUFBSSxnQkFBZ0IsUUFBUTtBQUFBO0FBRTNDLFNBQU8sTUFBTSxNQUFNLEtBQUs7QUFBQSxJQUNwQixRQUFRLFFBQVE7QUFBQSxJQUNo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
