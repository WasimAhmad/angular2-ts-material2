/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
  // map tells the System loader where to look for things
  var map = {
    '@angular2-material/core': 'node_modules/@angular2-material/core',
    '@angular2-material/checkbox': 'node_modules/@angular2-material/checkbox',
    '@angular2-material/button': 'node_modules/@angular2-material/button',
    '@angular2-material/progress-circle': 'node_modules/@angular2-material/progress-circle',
    '@angular2-material/card': 'node_modules/@angular2-material/card',
    '@angular2-material/input': 'node_modules/@angular2-material/input',
    '@angular2-material/toolbar': 'node_modules/@angular2-material/toolbar',
    'app':                        'app', // 'dist',
    '@angular':                   'node_modules/@angular',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'rxjs':                       'node_modules/rxjs'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    '@angular2-material/core': { main: 'core.js', defaultExtension: 'js'},
    '@angular2-material/checkbox': { main: 'checkbox.js', defaultExtension: 'js'},
    '@angular2-material/button': { main: 'button.js', defaultExtension: 'js'},
    '@angular2-material/progress-circle': { main: 'progress-circle.js', defaultExtension: 'js'},
    '@angular2-material/card': { main: 'card.js', defaultExtension: 'js'},
    '@angular2-material/input': { main: 'input.js', defaultExtension: 'js'},
    '@angular2-material/toolbar': { main: 'toolbar.js', defaultExtension: 'js'},
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
  };







  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
})(this);
