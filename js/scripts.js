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
 * Creates a new Model instance.
 *
 * @constructor
 * @param {object} storage A reference to the client side storage class
 */
function Model(dbName, db){
  this.dbName = dbName || false;
  this.db = db || window.localstorage;
}


/**
* Creates new objects in the model
*
*/
Model.prototype.create = function(){

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