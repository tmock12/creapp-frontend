import Ember from 'ember';

export default Ember.Controller.extend({
  registration: Ember.computed.alias('model'),
  user: Ember.computed.alias('registration.user'),
  company: Ember.computed.alias('registration.company'),
  firstName: Ember.computed.alias('user.firstname'),
  userErrors: Ember.computed.alias('registration.errors.messages.firstObject.user'),

  actions: {
    signUpUser() {
      this.get("registration").save().then(
        ()=> { this.transitionToRoute('registration.thanks'); },
        ()=> { }
      );
    }
  }
});
