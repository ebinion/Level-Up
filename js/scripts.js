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
  settings = settings || {};

  this.dbName = dbName || "goals";

  callback = callback || function(){};

  // Settings
  this.dbType = settings["dbType"] || window.localStorage;

  // Initialize collection
  if( !this.dbType.getItem(this.dbName) ){
    this.dbType.setItem(this.dbName, []);
  }

  // window.console.log( JSON.parse(this.dbType.getItem(this.dbName)) );

  return callback();
}

/**
* Returns all elements in the model, is used by most functions in the class
*
*/
Model.prototype.all = function(){
  data = this.dbType.getItem(this.dbName);

  if(!data){
    return [];
  }else{
    return JSON.parse(data);
  }
};

/**
* Saves the model
*
*/
Model.prototype.save = function(currentModel){
  if(!currentModel){
    return false;
  }
  this.dbType.setItem(this.dbName, JSON.stringify(currentModel));
};


/**
 * Creates new objects in the model
 * 
 * @param {function} [callback] The function to call after the object has been created
 */
Model.prototype.create = function(object, callback){
  currentModel = this.all();
  currentModel.push(object);

  this.save(currentModel);

  callback = callback || function () {};

  return callback();
};


/**
* Finds specific objects in the model
*
*/
Model.prototype.find = function(id){
  if(id === null || id === false){
    return false;
  }
  currentModel = this.all();

  if(id > currentModel.length - 1){
    return false;
  }else{
    return currentModel[id];
  }

};

/**
* Updates objects in the model
*
*/
Model.prototype.update = function(id, object, callback){
  if(id === null || id === false || !object){
    return false;
  }

  currentModel = this.all();
  if(!currentModel[id]){
    return false;
  }

  currentModel[id] = object;
  this.save(currentModel);

  callback = callback || function(){};
  return callback();
};

/**
* Deletes objects in the model
*
*/
Model.prototype.delete = function(){

};


var Test = new Model();