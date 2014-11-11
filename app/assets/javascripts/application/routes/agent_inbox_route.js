(function() {
  "use strict";

  App.AgentInboxRoute = Ember.Route.extend({
    model: function() {
      return [
        Ember.Object.create({ id: 1 }),
        Ember.Object.create({ id: 2 })
      ];
    },

    setupController: function(controller, model) {
      this._super(controller, model);

      controller.setProperties({
        inboxCount:      8,
        favoritesCount:  6,
        likesCount:      4,
        noInterestCount: 35
      })
    }
  });

})();
