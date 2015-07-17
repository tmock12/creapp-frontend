import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    invalidateSession: function() {
      return this.get('session').invalidate('authenticators:authem');
    }
  }
});
