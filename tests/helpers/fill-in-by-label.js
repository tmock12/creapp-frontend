import Ember from 'ember';

export default Ember.Test.registerAsyncHelper('fillInByLabel', function(app, labelSelectorText, fillText) {
  var $label, inputId;
  $label = findWithAssert("label:contains('" + labelSelectorText + "')");
  inputId = $label.attr('for');
  return fillIn('#' + inputId, fillText);
});
