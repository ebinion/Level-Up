// This file is primarily for listener style code (e.g. $obj.bind ...)
(function(window){

  function Goal() {
    this.model = new window.app.Model();
    this.view = new window.app.View();
    this.controller = new window.app.Controller();
  }

  var goal = new Goal();

  // Clicking New Goal triggers the modal
  $("#newGoalButton").click(function(e){
    goal.view.openModal(e);
  });

  // Clicking cancel closes the modal
  $("#modalCancel").bind('click', function(e){
    goal.view.closeModal(e);
  });

  // Focus on .goalContent (except the one in the modal) adds focus class
  $(".goalContent").not("#newGoalContent").bind('focus', function(e){
    goal.view.existingGoalAddFocus(this);
  });

  // Blur out of .goalContent (except the one in the modal) removes focus class
  $(".goalContent").not("#newGoalContent").bind('blur', function(e){
    goal.view.existingGoalRemoveFocus(this);
  });

})(window);