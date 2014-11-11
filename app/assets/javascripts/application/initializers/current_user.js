(function() {
  "use strict";

  Ember.Application.initializer({
    name: 'currentUser',

    // Inject the current user into all routes and controllers
    initialize: function(container) {
      var user = Ember.Object.create({
        id: 1,
        name: 'Pablo Picasso'
      });

      container.optionsForType('user', { instantiate: false, singleton: true });
      container.register('user:current', user);

      // Inject the current user into all routes and controllers
      container.typeInjection('controller', 'currentUser', 'user:current');
      container.typeInjection('route', 'currentUser', 'user:current');
    }
  });

})();
