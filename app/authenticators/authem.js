import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';

export default Base.extend({
  serverTokenEndpoint: 'api/v1/sessions',
  resourceName: 'user',
  tokenAttributeName: 'token',
  identificationAttributeName: 'email',

  restore: function(properties) {
    var _this            = this;
    var propertiesObject = Ember.Object.create(properties);
    return new Ember.RSVP.Promise(function(resolve, reject) {
      if (!Ember.isEmpty(propertiesObject.get(_this.tokenAttributeName)) && !Ember.isEmpty(propertiesObject.get(_this.identificationAttributeName))) {
        resolve(properties);
      } else {
        reject();
      }
    });
  },

  authenticate: function(credentials) {
    var _this = this;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      var data                 = {};
      data[_this.resourceName] = {
        password: credentials.password,
        email: credentials.email
      };

      _this.makeRequest(_this.serverTokenEndpoint, 'POST', data).then(function(response) {
        Ember.run(function() {
          resolve(response);
        });
      }, function(xhr /*status, error*/) {
        Ember.run(function() {
          reject(xhr.responseJSON || xhr.responseText);
        });
      });
    });
  },

  invalidate: function(data) {
    var _this = this;
    var deleteServerTokenEndpoint = this.serverTokenEndpoint + '/' + data.token;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      _this.makeRequest(deleteServerTokenEndpoint, 'DELETE', data).then(function(/*response*/) {
        Ember.run(function() {
          resolve();
        });
      }, function(xhr /*status, error*/) {
        Ember.run(function() {
          reject(xhr.responseJSON || xhr.responseText);
        });
      });
    });
  },

  makeRequest: function(url, type, data /*resolve,reject*/) {
    return Ember.$.ajax({
      url:        url,
      type:       type,
      data:       data,
      dataType:   'json',
      beforeSend: function(xhr, settings) {
        xhr.setRequestHeader('Accept', settings.accepts.json);
      }
    });
  }
});
