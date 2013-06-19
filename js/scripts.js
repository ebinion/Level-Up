// So class, do you know why this doesn't work? Local Storage doesn't searialize data. You only have key/value pairs.


var formHandler = function(){
  document.forms["goal-form"].onsubmit = function(){
    var date = document.getElementById("goal-date").value;
    var goal = document.getElementById("goal-statement").value;

    saveForm(date, goal);
    return false;
  };
}

var saveForm = function(date, goal){
  // Save it using the Chrome extension storage API.
  chrome.storage.sync.set({"date": date, "goal": goal}, function(){
    window.console.log("Saved successfully!");
  });

  return false;
};

var retrieveData = function(){
  chrome.storage.sync.get(null, function(items){
    for(i=0; i>items.length; i++){
      window.console.log(items[i]);
    }
  });
}


window.onload = (function(){
  formHandler();
  retrieveData();
});