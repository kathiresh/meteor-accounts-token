Package.describe({
  name: 'kathiresan:accounts-token',
  version: '0.0.1',
  summary: 'Generate login tokens',
  git: 'https://github.com/kathiresh',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use([
    'random',
    'accounts-base',
    'accounts-ui',
    'accounts-password'
  ], [
    'client', 'server'
  ]);

  api.addFiles([
    'server/token-server.js'
  ], 'server');


  api.addFiles('client/token-client.js', 'client');

  api.imply([
    'accounts-base', 'accounts-ui', 'accounts-password'
  ]);
});

Package.onTest(function(api){});
