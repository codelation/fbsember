(function() {
  "use strict";

  App.IndexController = Ember.ObjectController.extend({
    mls:   Ember.Object.create({ id: 20 }),
    agent: Ember.Object.create({ id: 500 })
  });

})();
