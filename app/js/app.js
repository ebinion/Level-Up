// This file is primarily for listener style code (e.g. $obj.bind ...)
(function (window) {
  'use strict';

  function Goal() {
    this.model = new window.app.Model();
    this.view = new window.app.View();
    this.controller = new window.app.Controller();
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
  

})(window);