(function() {
  "use strict";

  App.AgentInboxController = Ember.ArrayController.extend({
    needs: ['agent'],
    agent: Ember.computed.alias('controllers.agent')
  });

})();
