// Namespace Object
var LevelUp = LevelUp || {};

// This file is primarily for listener style code (e.g. open a modal)
(function($, APP) {
  'use strict';

  APP.View = function() {
    // Common view objects
    this.newGoalModal = $("#newGoalModal");
    this.newGoalContent = $("#newGoalContent");

    // Modal placeholder text
    this.modalPlaceholderText = "What would you like to accomplish?";
  };

  // Opens the modal & brings the editor into focus
  APP.View.prototype.openModal = function (e) {
    this.newGoalModal.removeClass("hidden");
    this.newGoalContent.focus();
    e.preventDefault();
  };

  // Closes the modal, blurs the input field & resets the text
  APP.View.prototype.closeModal = function (e) {
    this.newGoalModal.addClass("hidden");
    this.newGoalContent.html(this.modalPlaceholderText).blur();
    e.preventDefault();
  };

  // Adds focus class to .goalContent parent when focused
  APP.View.prototype.existingGoalAddFocus = function (obj) {
    $(obj).parent(".goal").addClass("focus");
  };

  // Removes focus class to .goalContent parent when focused
  APP.View.prototype.existingGoalRemoveFocus = function (obj) {
    $(obj).parent(".goal").removeClass("focus");
  };

  // Clear placeholder content
  APP.View.prototype.clearPlaceholder = function (e) {
    if (e.keyCode != 13 && $(e.target).html() == this.modalPlaceholderText) {
      $(e.target).html("");
    }
  };


  // // Pass the view to the window
  // window.app.View = View;

})($, LevelUp);