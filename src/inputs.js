// eslint-disable-next-line import/prefer-default-export
export function getAllInput(core, github) {
  const environmentAppKey = core.getInput('environment-app-key');
  const apiKey = core.getInput('api-key');
  const appPath = core.getInput('app');
  const releaseNotes = core.getInput('release-notes');
  const buildType = core.getInput('build-type') || 'GitHub Actions';
  const bundleVersion = core.getInput('bundle-version');

  const payload = github.context.payload;
  const gitCommitHash = payload.head_commit.id;
  const gitCommitUrl = payload.head_commit.url;
  const repository = payload.head_commit.url;
  const branch = github.context.ref;

  return {
    apiKey,
    appPath,
    environmentAppKey,
    releaseNotes,
    buildType,
    bundleVersion,
    gitCommitHash,
    gitCommitUrl,
    repository,
    branch
  };
}
