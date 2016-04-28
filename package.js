Package.describe({
  name: 'zetoff:meteor-astroforms-react-bootstrap',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Astroforms-React-Bootstrap implmentation',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/Zetoff/meteor-astroforms-react-bootstrap',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');

//meteor dependencies
  api.use(['ecmascript',
'es5-shim',
'tmeasday:check-npm-versions',
'zetoff:astroforms-react'
],['client', 'server']);
//TODO: really need server? If eliminated, does imply that the dependencies will not we executed in the server?

//npm dependencies
api.addFiles('check-npm.js', ['client', 'server']);// using tmeasday:check-npm-versions

api.addFiles('client/main.js', 'client');

 api.export('Astroforms','client');

  api.mainModule('lib/main.js',['client','server']);
});
