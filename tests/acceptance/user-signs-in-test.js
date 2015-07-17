import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'creapp/tests/helpers/start-app';

var application;

module('Acceptance | user signs in', {
  beforeEach() {
    application = startApp();
  },

  afterEach() {
    Ember.run(application, 'destroy');
  }
});

test('user signs in', function(assert) {
  visit('/');
  click("a:contains(Sign In)");

  andThen(function() {
    fillInByLabel('Email', 'wrong@email.com');
    fillInByLabel('Password', 'wrong-password');
    click('button');
  });

  andThen(function() {
    assert.equal(find('p').text(), 'Incorrect email or password');
    assert.equal(currentURL(), '/sign-in');
  });

  andThen(function() {
    fillInByLabel('Email', 'correct@email.com');
    fillInByLabel('Password', 'correct-password');
    click('button');
  });

  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.equal(find('.nav-wrapper li a').text(), 'Logout');
  });

});
