(function () {
  'use strict';

  /* jshint -W098 */
  // The Package is past automatically as first parameter
  module.exports = function (SecondpillarTheme, app, auth, database) {

    app.get('/api/secondpillarTheme/example/anyone', function (req, res, next) {
      res.send('Anyone can access this');
    });

    app.get('/api/secondpillarTheme/example/auth', auth.requiresLogin, function (req, res, next) {
      res.send('Only authenticated users can access this');
    });

    app.get('/api/secondpillarTheme/example/admin', auth.requiresAdmin, function (req, res, next) {
      res.send('Only users with Admin role can access this');
    });

    app.get('/api/secondpillarTheme/example/render', function (req, res, next) {
      SecondpillarTheme.render('index', {
        package: 'secondpillarTheme'
      }, function (err, html) {
        //Rendering a view from the Package server/views
        res.send(html);
      });
    });
  };
})();