Package.describe({
  name: 'liberation:session-getonce',
  summary: 'Adds an getOnce method to Session',
  version: '1.0.0',
  git: 'https://github.com/dolgarev/session-getonce.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('session');
  api.addFiles('getonce.js', 'client');
});
