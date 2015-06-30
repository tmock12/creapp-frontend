import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user', { embedded: 'always' }),
  company: DS.belongsTo('company')
});
