// So class, do you know why this doesn't work? Local Storage doesn't searialize data. You only have key/value pairs.

/* Figured out how to store data but don't want to change it yet. Need to finish a different project. New data format idea:

{
  "goals": [
    {
      "goal": "Something I want to accomplish",
      "date": "yyyy/mm/dd (easier for sorting)",
      "priority": "Order I want to accomplish it in"
    }
  ],
  "settings": {
    "setting key": "setting value"
  }
}

*/


/**
 * Creates a new Model instance and a new collection object.
 *
 * @constructor
 * @param {object} storage A reference to the client side storage class
 */
function Model(dbName, settings, callback){
  this.dbName = dbName || goals;

  callback = callback || function () {};

  // Settings
  this.dbType = settings["dbType"] || window.localstorage;

  callback();
}


/**
 * Creates new objects in the model
 * 
 * @param {function} [callback] The function to call after the object has been created
 */
Model.prototype.create = function(object, callback){
  callback = callback || function () {};
}

/**
* Returns all elements in the model
*
*/
Model.prototype.all = function(){

}

/**
* Finds specific objects in the model
*
*/
Model.prototype.find = function(){

}

/**
* Updates objects in the model
*
*/
Model.prototype.update = function(){

}

/**
* Deletes objects in the model
*
*/
Model.prototype.delete = function(){

}