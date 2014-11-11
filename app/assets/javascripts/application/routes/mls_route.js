(function() {
  "use strict";

  App.MlsRoute = Ember.Route.extend({
    model: function(params) {
      return Ember.Object.create({ id: params.mls_id });
    }
  });

})();
