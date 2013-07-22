// Namespace Object
var LevelUp = LevelUp || {};

// Pass reference to jQuery and Namespace
(function($, APP) {

  'use strict';

  function Goal() {
    // this.model = new APP.Model();
    this.view = new APP.View();
    // this.controller = new APP.Controller();
  }

  var goal = new Goal();

  // Clicking New Goal opens the modal
  $("#newGoalButton").click(function (e) {
    goal.view.openModal(e);
  });

  // Clicking cancel closes the modal
  $("#modalCancel").bind('click', function (e) {
    goal.view.closeModal(e);
  });

  // Focus on .goalContent (except the one in the modal) adds focus class
  $(".goalContent").not("#newGoalContent").bind('focus', function () {
    goal.view.existingGoalAddFocus(this);
  });

  // Blur out of .goalContent (except the one in the modal) removes focus class
  $(".goalContent").not("#newGoalContent").bind('blur', function () {
    goal.view.existingGoalRemoveFocus(this);
  });

  // Clear placeholder text on new goal when key pressed (except enter/return or esc)
  $("#newGoalContent").bind('keypress', function (e) {
    goal.view.clearPlaceholder(e);
  });

  $("#modalSave").click(function() {
    /**
      TODO:
      - Move the setting of the key into the APP.Model.save() function.
    **/
    var allGoals = APP.Model.get();
    var nextKey = Object.keys(allGoals).length + 1;
    var newGoal = $('#newGoalContent').text();

    APP.Model.save(nextKey, newGoal);
  });


})(jQuery, LevelUp);