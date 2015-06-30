import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'creapp/tests/helpers/start-app';

var application;

module('Acceptance | user signs up', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('user signs up succesfully', function(assert) {
  visit('/').then(function(){
    click('a:contains("Get Started")');
  }).then(function() {
    fillInByLabel('First Name', 'Ted');
    fillInByLabel('Last Name', 'McAwesome');
    fillInByLabel('Phone Number', '867-5309');
    fillInByLabel('Email', 'dummy@example.com');
    fillInByLabel('Company', 'Awesome Sauce Co.');
    fillInByLabel('Password', 'secret123');
    click('button');
  }).then(function() {
    assert.equal(currentURL(), '/sign-up/thanks');
    assert.equal(find('h2').text(), 'Thanks for signing up!');
  });
});
