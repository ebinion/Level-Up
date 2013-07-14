// This file is primarily for listener style code (e.g. open a modal)
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


})(window);