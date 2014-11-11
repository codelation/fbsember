(function() {
  "use strict";

  App.Router.map(function() {

    // Everything will be nested within the agent routes.
    // This will give access to the selected agent throughout
    // the app because the agent ID is known from the route.
    this.resource('agent', { path: '/agents/:agent_id'}, function() {

      // This route loads all the information we need in the left tab bar
      // Allow for multiple routes for different view types
      this.resource('agent.inbox', { path: '/inbox' }, function() {
        this.route('gallery');
        this.route('map');
      });

      this.resource('agent.favorites', { path: '/favorites'}, function() {
        this.route('gallery');
        this.route('map');
      });

      this.resource('agent.likes', { path: '/likes'}, function() {
        this.route('gallery');
        this.route('map');
      });





      // If needed, the listings could be filtered further by nesting
      // the MLS within the agent if listings should only show
      // Fargo search results and the agent is in more than one MLS
      this.resource('agent.mls', { path: '/mls/:mls_id'}, function() {

      });
    })
  });

})();
