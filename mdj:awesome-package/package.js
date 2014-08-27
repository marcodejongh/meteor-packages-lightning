Package.describe({
  summary: " \* Fill me in! *\ ",
  version: "0.0.5",
  git: " \* Fill me in! *\ "
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');

  api.addFiles(['mdj:awesome-package.js'], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');

	api.addFiles('mdj:awesome-package.js', 'client');
  api.addFiles('mdj:awesome-package-tests.js', 'client' );
});
