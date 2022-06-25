// eslint-disable-next-line import/prefer-default-export
export function getAllInput(core, github) {
  const environmentAppKey = core.getInput('ENVIRONMENT_APP_KEY');
  const apiKey = core.getInput('API_KEY');
  const appPath = core.getInput('APP');
  const releaseNotes = core.getInput('RELEASE_NOTES');
  const buildType = core.getInput('BUILD_TYPE') || 'GitHub Actions';
  const bundleVersion = core.getInput('BUNDLE_VERSION');

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
