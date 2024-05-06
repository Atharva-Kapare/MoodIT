module.exports = {
    branches: ['main'],
    dryRun: false,
    repositoryUrl: 'https://github.com/Atharva-Kapare/MoodIT',
    plugins: [
      [
        '@semantic-release/commit-analyzer',
        {
          releaseRules: [{ type: 'chore', scope: 'deps', release: 'patch' }],
        },
      ],
      [
        '@semantic-release/release-notes-generator',
        {
          preset: 'conventionalcommits',
          presetConfig: {
            types: [
              { type: 'feat', section: 'Features' },
              { type: 'fix', section: 'Bug Fixes' },
              { type: 'build', section: 'Dependencies' },
              { type: 'chore', hidden: true },
              { type: 'docs', hidden: true },
              { type: 'style', hidden: true },
              { type: 'refactor', hidden: true },
              { type: 'perf', section: 'Performance Improvements' },
              { type: 'test', hidden: true },
              { type: 'ci', hidden: true },
            ],
          },
        },
      ],
      '@semantic-release/npm',
      '@semantic-release/github',
      [
        '@semantic-release/changelog',
        {
          changelogFile: 'CHANGELOG.md',
        },
      ],
      [
        '@semantic-release/git',
        {
          assets: ['package.json', 'yarn.lock', 'CHANGELOG.md'],
          message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
        },
      ],
    ],
  };