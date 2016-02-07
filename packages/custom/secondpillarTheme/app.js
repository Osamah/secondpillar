'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var SecondpillarTheme = new Module('secondpillarTheme');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
SecondpillarTheme.register(function(app, auth, database, system) {

  //We enable routing. By default the Package Object is passed to the routes
  SecondpillarTheme.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  SecondpillarTheme.menus.add({
    title: 'secondpillarTheme example page',
    link: 'secondpillarTheme example page',
    roles: ['authenticated'],
    menu: 'secondpillarMenu'
  });
  
  app.set('views', __dirname + '/server/views');


  SecondpillarTheme.aggregateAsset('css', 'secondpillarTheme.css');
  SecondpillarTheme.angularDependencies(['mean.system']);
  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    SecondpillarTheme.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    SecondpillarTheme.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    SecondpillarTheme.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return SecondpillarTheme;
});
