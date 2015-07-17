import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    willTransition() {
      this.controller.setProperties(
        {email: null, password: null, signInError: null }
      );
    }
  }
});
