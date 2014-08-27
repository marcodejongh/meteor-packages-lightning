Package.describe({
  summary: " \* Fill me in! *\ ",
  version: "0.0.8",
  git: " \* Fill me in! *\ "
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');

	api.use([
		'templating',
		'underscore',
		'less'
	], 'client');

  api.addFiles(['mdj:awesome-package.js', 'awesome.html', 'awesome.js'], 'client');
	api.export('Awesome', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');

	api.addFiles('mdj:awesome-package.js', 'client');
  api.addFiles('mdj:awesome-package-tests.js', 'client' );
});
