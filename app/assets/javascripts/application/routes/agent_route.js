(function() {
  "use strict";

  App.AgentRoute = Ember.Route.extend({
    model: function(params) {
      return Ember.Object.create({
        id:   params.agent_id,
        name: 'Phil Dunphy'
      });
    },

    setupController: function(controller, model) {
      this._super(controller, model);

      var meta = Ember.Object.create({
        inboxCount:      8,
        favoritesCount:  6,
        likesCount:      4,
        noInterestCount: 35
      })
      controller.set('meta', meta);
    }
  });

})();
