// This file is primarily for listener style code (e.g. open a modal)
(function(window){
  function View(){
    var self = this;

    // Common view objects
    this.newGoalModal = $("#newGoalModal");
    this.newGoalContent = $("#newGoalContent");

    // Modal placeholder text
    this.modalPlaceholderText = "What would you like to accomplish?";
  }

  // Opens the modal & brings the editor into focus
  View.prototype.openModal = function (e){
    this.newGoalModal.removeClass("hidden");
    this.newGoalContent.focus();
    e.preventDefault();
  }

  // Closes the modal, blurs the input field & resets the text
  View.prototype.closeModal = function (e){
    this.newGoalModal.addClass("hidden");
    this.newGoalContent.html(this.modalPlaceholderText).blur();
    e.preventDefault();
  }

  // Adds focus class to .goalContent parent when focused
  View.prototype.existingGoalAddFocus = function(obj){
    $(obj).parent(".goal").addClass("focus");
  }

  // Removes focus class to .goalContent parent when focused
  View.prototype.existingGoalRemoveFocus = function(obj){
    $(obj).parent(".goal").removeClass("focus");
  }



  // Pass the view to the window
  window.app.View = View;

})(window);