let github_token1 = undefined;
let github_api_url1 = 'https://api.github.com';
const setToken1 = (token)=>github_token1 = token
;
const setEndPoint1 = (url)=>github_api_url1 = url
;
const defaults = {
    method: 'GET',
    extraHeaders: {
    }
};
const get1 = async (endpoint, options = {
})=>{
    options = {
        ...defaults,
        ...options
    };
    if (!endpoint.startsWith('/')) endpoint = '/' + endpoint;
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
            accept: 'application/vnd.github.v3+json',
            ...options.extraHeaders
        }
    });
};
export { github_token1 as github_token };
export { github_api_url1 as github_api_url };
export { setToken1 as setToken };
export { setEndPoint1 as setEndPoint };
export { get1 as get };
class githubError1 extends Error {
    static notFound(thing, data) {
        return new this(`${thing.toUpperCase()} NOT FOUND "${data}"`);
    }
}
export { githubError1 as githubError };
async function getRepository1(org, repo) {
    const res = await (await get1(`repos/${org}/${repo}`)).json();
    if (res.message) throw githubError1.notFound(`REPOSITORY`, `${org}/${repo}`);
    return res;
}
export { getRepository1 as getRepository };
async function getUser1(user) {
    const res = await (await get1(`user/${user}`)).json();
    if (res.message) throw githubError1.notFound('USER', user);
    return res;
}
export { getUser1 as getUser };
async function createGist1(options) {
    const res = await (await get1(`gists`, {
        method: 'POST',
        body: JSON.stringify(options),
        needsToken: true
    })).json();
    return res;
}
async function viewGists1(options) {
    const res = await (await get1(`gists`, {
        method: 'GET',
        needsToken: true,
        params: options
    })).json();
    return res;
}
export { createGist1 as createGist };
export { viewGists1 as viewGists };
var Language1;
(function(Language1) {
    Language1["HTML"] = 'HTML';
    Language1["JSON"] = 'JSON';
    Language1["JavaScript"] = 'JavaScript';
    Language1["Markdown"] = 'Markdown';
    Language1["Python"] = 'Python';
    Language1["Scss"] = 'SCSS';
    Language1["Solidity"] = 'Solidity';
    Language1["Text"] = 'Text';
    Language1["TypeScript"] = 'TypeScript';
})(Language1 || (Language1 = {
}));
var FileType1;
(function(FileType1) {
    FileType1["ApplicationJSON"] = 'application/json';
    FileType1["ApplicationJavascript"] = 'application/javascript';
    FileType1["ApplicationXPython"] = 'application/x-python';
    FileType1["TextHTML"] = 'text/html';
    FileType1["TextMarkdown"] = 'text/markdown';
    FileType1["TextPlain"] = 'text/plain';
    FileType1["VideoMP2T"] = 'video/MP2T';
})(FileType1 || (FileType1 = {
}));
var OwnerType1;
(function(OwnerType1) {
    OwnerType1["User"] = "User";
})(OwnerType1 || (OwnerType1 = {
}));
export { Language1 as Language,  };
export { FileType1 as FileType,  };
export { OwnerType1 as OwnerType,  };

