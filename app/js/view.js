// This file is primarily for listener style code (e.g. open a modal)
(function (window) {
  'use strict';

  function View() {
    // Common view objects
    this.newGoalModal = $("#newGoalModal");
    this.newGoalContent = $("#newGoalContent");

    // Modal placeholder text
    this.modalPlaceholderText = "What would you like to accomplish?";
  }

  // Opens the modal & brings the editor into focus
  View.prototype.openModal = function () {
    this.newGoalModal.removeClass("hidden");
    this.newGoalContent.focus();

    window.console.log(this);
    return false;
  };

  // Closes the modal, blurs the input field & resets the text
  View.prototype.closeModal = function () {
    this.newGoalModal.addClass("hidden");
    this.newGoalContent.html(this.modalPlaceholderText).blur();
  };

  // Adds focus class to .goalContent parent when focused
  View.prototype.existingGoalAddFocus = function (obj) {
    $(obj).parent(".goal").addClass("focus");
  };

  // Removes focus class to .goalContent parent when focused
  View.prototype.existingGoalRemoveFocus = function (obj) {
    $(obj).parent(".goal").removeClass("focus");
  };

  // Clear placeholder content
  View.prototype.clearPlaceholder = function (e) {
    if (e.keyCode != 13 && $(e.target).html() == this.modalPlaceholderText) {
      $(e.target).html("");
    }
  };


  // Pass the view to the window
  window.app.View = View;

})(window);