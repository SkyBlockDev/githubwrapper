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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZGlzdC9icm93c2VyLmJ1bmRsZS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsibGV0IGdpdGh1Yl90b2tlbjEgPSB1bmRlZmluZWQ7XG5sZXQgZ2l0aHViX2FwaV91cmwxID0gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20nO1xuY29uc3Qgc2V0VG9rZW4xID0gKHRva2VuKT0+Z2l0aHViX3Rva2VuMSA9IHRva2VuXG47XG5jb25zdCBzZXRFbmRQb2ludDEgPSAodXJsKT0+Z2l0aHViX2FwaV91cmwxID0gdXJsXG47XG5jb25zdCBkZWZhdWx0cyA9IHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGV4dHJhSGVhZGVyczoge1xuICAgIH1cbn07XG5jb25zdCBnZXQxID0gYXN5bmMgKGVuZHBvaW50LCBvcHRpb25zID0ge1xufSk9PntcbiAgICBvcHRpb25zID0ge1xuICAgICAgICAuLi5kZWZhdWx0cyxcbiAgICAgICAgLi4ub3B0aW9uc1xuICAgIH07XG4gICAgaWYgKCFlbmRwb2ludC5zdGFydHNXaXRoKCcvJykpIGVuZHBvaW50ID0gJy8nICsgZW5kcG9pbnQ7XG4gICAgaWYgKG9wdGlvbnMubmVlZHNUb2tlbiAmJiAhZ2l0aHViX3Rva2VuMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7ZW5kcG9pbnR9IFJFUVVJUkVTIEEgVE9LRU5gKTtcbiAgICB9XG4gICAgaWYgKGdpdGh1Yl90b2tlbjEpIHtcbiAgICAgICAgb3B0aW9ucy5leHRyYUhlYWRlcnMgPyBvcHRpb25zLmV4dHJhSGVhZGVycy5hdXRob3JpemF0aW9uID0gYHRva2VuICR7Z2l0aHViX3Rva2VuMX1gIDogb3B0aW9ucy5leHRyYUhlYWRlcnMgPSB7XG4gICAgICAgICAgICBhdXRob3JpemF0aW9uOiBgdG9rZW4gJHtnaXRodWJfdG9rZW4xfWBcbiAgICAgICAgfTtcbiAgICB9XG4gICAgbGV0IHVybCA9IGdpdGh1Yl9hcGlfdXJsMSArIGVuZHBvaW50O1xuICAgIGlmIChvcHRpb25zLnBhcmFtcykge1xuICAgICAgICB1cmwgKz0gYD8ke25ldyBVUkxTZWFyY2hQYXJhbXMob3B0aW9ucy5wYXJhbXMpfWA7XG4gICAgfVxuICAgIHJldHVybiBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgbWV0aG9kOiBvcHRpb25zLm1ldGhvZCxcbiAgICAgICAgYm9keTogb3B0aW9ucy5ib2R5LFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBhY2NlcHQ6ICdhcHBsaWNhdGlvbi92bmQuZ2l0aHViLnYzK2pzb24nLFxuICAgICAgICAgICAgLi4ub3B0aW9ucy5leHRyYUhlYWRlcnNcbiAgICAgICAgfVxuICAgIH0pO1xufTtcbmV4cG9ydCB7IGdpdGh1Yl90b2tlbjEgYXMgZ2l0aHViX3Rva2VuIH07XG5leHBvcnQgeyBnaXRodWJfYXBpX3VybDEgYXMgZ2l0aHViX2FwaV91cmwgfTtcbmV4cG9ydCB7IHNldFRva2VuMSBhcyBzZXRUb2tlbiB9O1xuZXhwb3J0IHsgc2V0RW5kUG9pbnQxIGFzIHNldEVuZFBvaW50IH07XG5leHBvcnQgeyBnZXQxIGFzIGdldCB9O1xuY2xhc3MgZ2l0aHViRXJyb3IxIGV4dGVuZHMgRXJyb3Ige1xuICAgIHN0YXRpYyBub3RGb3VuZCh0aGluZywgZGF0YSkge1xuICAgICAgICByZXR1cm4gbmV3IHRoaXMoYCR7dGhpbmcudG9VcHBlckNhc2UoKX0gTk9UIEZPVU5EIFwiJHtkYXRhfVwiYCk7XG4gICAgfVxufVxuZXhwb3J0IHsgZ2l0aHViRXJyb3IxIGFzIGdpdGh1YkVycm9yIH07XG5hc3luYyBmdW5jdGlvbiBnZXRSZXBvc2l0b3J5MShvcmcsIHJlcG8pIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCAoYXdhaXQgZ2V0MShgcmVwb3MvJHtvcmd9LyR7cmVwb31gKSkuanNvbigpO1xuICAgIGlmIChyZXMubWVzc2FnZSkgdGhyb3cgZ2l0aHViRXJyb3IxLm5vdEZvdW5kKGBSRVBPU0lUT1JZYCwgYCR7b3JnfS8ke3JlcG99YCk7XG4gICAgcmV0dXJuIHJlcztcbn1cbmV4cG9ydCB7IGdldFJlcG9zaXRvcnkxIGFzIGdldFJlcG9zaXRvcnkgfTtcbmFzeW5jIGZ1bmN0aW9uIGdldFVzZXIxKHVzZXIpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCAoYXdhaXQgZ2V0MShgdXNlci8ke3VzZXJ9YCkpLmpzb24oKTtcbiAgICBpZiAocmVzLm1lc3NhZ2UpIHRocm93IGdpdGh1YkVycm9yMS5ub3RGb3VuZCgnVVNFUicsIHVzZXIpO1xuICAgIHJldHVybiByZXM7XG59XG5leHBvcnQgeyBnZXRVc2VyMSBhcyBnZXRVc2VyIH07XG5hc3luYyBmdW5jdGlvbiBjcmVhdGVHaXN0MShvcHRpb25zKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgKGF3YWl0IGdldDEoYGdpc3RzYCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob3B0aW9ucyksXG4gICAgICAgIG5lZWRzVG9rZW46IHRydWVcbiAgICB9KSkuanNvbigpO1xuICAgIHJldHVybiByZXM7XG59XG5hc3luYyBmdW5jdGlvbiB2aWV3R2lzdHMxKG9wdGlvbnMpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCAoYXdhaXQgZ2V0MShgZ2lzdHNgLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIG5lZWRzVG9rZW46IHRydWUsXG4gICAgICAgIHBhcmFtczogb3B0aW9uc1xuICAgIH0pKS5qc29uKCk7XG4gICAgcmV0dXJuIHJlcztcbn1cbmV4cG9ydCB7IGNyZWF0ZUdpc3QxIGFzIGNyZWF0ZUdpc3QgfTtcbmV4cG9ydCB7IHZpZXdHaXN0czEgYXMgdmlld0dpc3RzIH07XG52YXIgTGFuZ3VhZ2UxO1xuKGZ1bmN0aW9uKExhbmd1YWdlMSkge1xuICAgIExhbmd1YWdlMVtcIkhUTUxcIl0gPSAnSFRNTCc7XG4gICAgTGFuZ3VhZ2UxW1wiSlNPTlwiXSA9ICdKU09OJztcbiAgICBMYW5ndWFnZTFbXCJKYXZhU2NyaXB0XCJdID0gJ0phdmFTY3JpcHQnO1xuICAgIExhbmd1YWdlMVtcIk1hcmtkb3duXCJdID0gJ01hcmtkb3duJztcbiAgICBMYW5ndWFnZTFbXCJQeXRob25cIl0gPSAnUHl0aG9uJztcbiAgICBMYW5ndWFnZTFbXCJTY3NzXCJdID0gJ1NDU1MnO1xuICAgIExhbmd1YWdlMVtcIlNvbGlkaXR5XCJdID0gJ1NvbGlkaXR5JztcbiAgICBMYW5ndWFnZTFbXCJUZXh0XCJdID0gJ1RleHQnO1xuICAgIExhbmd1YWdlMVtcIlR5cGVTY3JpcHRcIl0gPSAnVHlwZVNjcmlwdCc7XG59KShMYW5ndWFnZTEgfHwgKExhbmd1YWdlMSA9IHtcbn0pKTtcbnZhciBGaWxlVHlwZTE7XG4oZnVuY3Rpb24oRmlsZVR5cGUxKSB7XG4gICAgRmlsZVR5cGUxW1wiQXBwbGljYXRpb25KU09OXCJdID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgIEZpbGVUeXBlMVtcIkFwcGxpY2F0aW9uSmF2YXNjcmlwdFwiXSA9ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JztcbiAgICBGaWxlVHlwZTFbXCJBcHBsaWNhdGlvblhQeXRob25cIl0gPSAnYXBwbGljYXRpb24veC1weXRob24nO1xuICAgIEZpbGVUeXBlMVtcIlRleHRIVE1MXCJdID0gJ3RleHQvaHRtbCc7XG4gICAgRmlsZVR5cGUxW1wiVGV4dE1hcmtkb3duXCJdID0gJ3RleHQvbWFya2Rvd24nO1xuICAgIEZpbGVUeXBlMVtcIlRleHRQbGFpblwiXSA9ICd0ZXh0L3BsYWluJztcbiAgICBGaWxlVHlwZTFbXCJWaWRlb01QMlRcIl0gPSAndmlkZW8vTVAyVCc7XG59KShGaWxlVHlwZTEgfHwgKEZpbGVUeXBlMSA9IHtcbn0pKTtcbnZhciBPd25lclR5cGUxO1xuKGZ1bmN0aW9uKE93bmVyVHlwZTEpIHtcbiAgICBPd25lclR5cGUxW1wiVXNlclwiXSA9IFwiVXNlclwiO1xufSkoT3duZXJUeXBlMSB8fCAoT3duZXJUeXBlMSA9IHtcbn0pKTtcbmV4cG9ydCB7IExhbmd1YWdlMSBhcyBMYW5ndWFnZSwgIH07XG5leHBvcnQgeyBGaWxlVHlwZTEgYXMgRmlsZVR5cGUsICB9O1xuZXhwb3J0IHsgT3duZXJUeXBlMSBhcyBPd25lclR5cGUsICB9O1xuXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBSSxnQkFBZ0I7QUFDcEIsSUFBSSxrQkFBa0I7QUFDdEIsTUFBTSxZQUFZLENBQUMsVUFBUSxnQkFBZ0I7QUFFM0MsTUFBTSxlQUFlLENBQUMsUUFBTSxrQkFBa0I7QUFFOUMsTUFBTSxXQUFXO0FBQUEsRUFDYixRQUFRO0FBQUEsRUFDUixjQUFjO0FBQUE7QUFHbEIsTUFBTSxPQUFPLE9BQU8sVUFBVSxVQUFVLE9BQ3BDO0FBQ0EsWUFBVTtBQUFBLE9BQ0g7QUFBQSxPQUNBO0FBQUE7QUFFUCxNQUFJLENBQUMsU0FBUyxXQUFXO0FBQU0sZUFBVyxNQUFNO0FBQ2hELE1BQUksUUFBUSxjQUFjLENBQUMsZUFBZTtBQUN0QyxVQUFNLElBQUksTUFBTSxHQUFHO0FBQUE7QUFFdkIsTUFBSSxlQUFlO0FBQ2YsWUFBUSxlQUFlLFFBQVEsYUFBYSxnQkFBZ0IsU0FBUyxrQkFBa0IsUUFBUSxlQUFlO0FBQUEsTUFDMUcsZUFBZSxTQUFTO0FBQUE7QUFBQTtBQUdoQyxNQUFJLE1BQU0sa0JBQWtCO0FBQzVCLE1BQUksUUFBUSxRQUFRO0FBQ2hCLFdBQU8sSUFBSSxJQUFJLGdCQUFnQixRQUFRO0FBQUE7QUFFM0MsU0FBTyxNQUFNLE1BQU0sS0FBSztBQUFBLElBQ3BCLFFBQVEsUUFBUTtBQUFBLElBQ2hCLE1BQU0sUUFBUTtBQUFBLElBQ2QsU0FBUztBQUFBLE1BQ0wsUUFBUTtBQUFBLFNBQ0wsUUFBUTtBQUFBO0FBQUE7QUFBQTtBQVN2QiwyQkFBMkIsTUFBTTtBQUFBLFNBQ3RCLFNBQVMsT0FBTyxNQUFNO0FBQ3pCLFdBQU8sSUFBSSxLQUFLLEdBQUcsTUFBTSw0QkFBNEI7QUFBQTtBQUFBO0FBSTdELDhCQUE4QixLQUFLLE1BQU07QUFDckMsUUFBTSxNQUFNLE1BQU8sT0FBTSxLQUFLLFNBQVMsT0FBTyxTQUFTO0FBQ3ZELE1BQUksSUFBSTtBQUFTLFVBQU0sYUFBYSxTQUFTLGNBQWMsR0FBRyxPQUFPO0FBQ3JFLFNBQU87QUFBQTtBQUdYLHdCQUF3QixNQUFNO0FBQzFCLFFBQU0sTUFBTSxNQUFPLE9BQU0sS0FBSyxRQUFRLFNBQVM7QUFDL0MsTUFBSSxJQUFJO0FBQVMsVUFBTSxhQUFhLFNBQVMsUUFBUTtBQUNyRCxTQUFPO0FBQUE7QUFHWCwyQkFBMkIsU0FBUztBQUNoQyxRQUFNLE1BQU0sTUFBTyxPQUFNLEtBQUssU0FBUztBQUFBLElBQ25DLFFBQVE7QUFBQSxJQUNSLE1BQU0sS0FBSyxVQUFVO0FBQUEsSUFDckIsWUFBWTtBQUFBLE1BQ1o7QUFDSixTQUFPO0FBQUE7QUFFWCwwQkFBMEIsU0FBUztBQUMvQixRQUFNLE1BQU0sTUFBTyxPQUFNLEtBQUssU0FBUztBQUFBLElBQ25DLFFBQVE7QUFBQSxJQUNSLFlBQVk7QUFBQSxJQUNaLFFBQVE7QUFBQSxNQUNSO0FBQ0osU0FBTztBQUFBO0FBSVgsSUFBSTtBQUNKLEFBQUMsVUFBUyxZQUFXO0FBQ2pCLGFBQVUsVUFBVTtBQUNwQixhQUFVLFVBQVU7QUFDcEIsYUFBVSxnQkFBZ0I7QUFDMUIsYUFBVSxjQUFjO0FBQ3hCLGFBQVUsWUFBWTtBQUN0QixhQUFVLFVBQVU7QUFDcEIsYUFBVSxjQUFjO0FBQ3hCLGFBQVUsVUFBVTtBQUNwQixhQUFVLGdCQUFnQjtBQUFBLEdBQzNCLGFBQWMsYUFBWTtBQUU3QixJQUFJO0FBQ0osQUFBQyxVQUFTLFlBQVc7QUFDakIsYUFBVSxxQkFBcUI7QUFDL0IsYUFBVSwyQkFBMkI7QUFDckMsYUFBVSx3QkFBd0I7QUFDbEMsYUFBVSxjQUFjO0FBQ3hCLGFBQVUsa0JBQWtCO0FBQzVCLGFBQVUsZUFBZTtBQUN6QixhQUFVLGVBQWU7QUFBQSxHQUMxQixhQUFjLGFBQVk7QUFFN0IsSUFBSTtBQUNKLEFBQUMsVUFBUyxhQUFZO0FBQ2xCLGNBQVcsVUFBVTtBQUFBLEdBQ3RCLGNBQWUsY0FBYTsiLAogICJuYW1lcyI6IFtdCn0K
