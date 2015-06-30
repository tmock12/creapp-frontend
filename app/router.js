import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('registration', {path: '/sign-up'}, function() {
    this.route('thanks');
  });
});

export default Router;
