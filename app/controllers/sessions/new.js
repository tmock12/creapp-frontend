import Ember from 'ember';

export default Ember.Controller.extend({
  emailValue: Ember.computed('emailValue', {
    get(){},
    set(_, value) {
      this.set('signInError', null);
      this.set('email', value);
    }
  }),
  passwordValue: Ember.computed('passwordValue', {
    get(){},
    set(_, value) {
      this.set('signInError', null);
      this.set('password', value);
    }
  }),
  actions: {
    signInUser() {
      var data = this.getProperties('email', 'password');
      this.get('session').authenticate('authenticators:authem', data).then(
        () => { this.transitionToRoute('application'); },
        () => { this.set('signInError', ['Invalid']); }
      );
    }
  }
});
