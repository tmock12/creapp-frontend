import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('registration');
  },
  afterModel: function(model) {
    var user = this.store.createRecord('user');
    var company = this.store.createRecord('company');
    model.setProperties({user: user, company: company});
  }
});
