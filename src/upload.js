import fetch, { FormData, fileFromSync } from 'node-fetch';

export async function upload(input) {
    const form = new FormData();
    form.append('app', fileFromSync(input.appPath));
    form.append('custom_branch', input.branch);
    form.append('git_commit_hash', input.gitCommitHash);
    form.append('git_commit_url', input.gitCommitUrl);
    form.append('repository_url', input.repository);
    form.append('build_type', input.buildType);

    let response = await fetch(`https://getupdraft.com/api/app_upload/${input.environmentAppKey}/${input.apiKey}/`, {
        method: 'PUT',
        body: form,
        "Content-Type": "multipart/form-data"
    });

    if (!response.ok) {
        const err = await response.json();
        if (!err.status) { err.status = 'none'; }
        if (!err.error_text) { err.error_text = 'none'; }
        throw new Error(`An error occurred...\nHTTP Status: ${response.status} - ${response.statusText}.\nStatus Message: ${err.status}\nError Text: ${err.error_text}`);
    }
}