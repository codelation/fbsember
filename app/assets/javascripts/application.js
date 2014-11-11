// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require handlebars
//= require ember
//= require ember-data
//= require_self
//= require_tree ./application/config
//= require_tree ./application/components
//= require_tree ./application/helpers
//= require_tree ./application/mixins
//= require_tree ./application/controllers
//= require_tree ./application/initializers
//= require_tree ./application/models
//= require_tree ./application/routes
//= require_tree ./application/serializers
//= require_tree ./application/templates

App = Ember.Application.create({
  LOG_TRANSITIONS: true
});
