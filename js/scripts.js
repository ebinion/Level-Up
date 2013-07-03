(function (window) {
  /**
   * Creates a new Model instance and a new collection object.
   *
   * @class Model
   * @constructor
   * @param {string} [dbName] The name of the model. Used to set and get items in the client-side DB 
   * @param {object} [dbType] A reference to the client-side DB
   * @param {method} [callback] A method to run after the class initializes
   * @return {method} Calls the provided function
   */
  function Model(dbName, dbType, callback){
    // Settings
    this.dbName = dbName || "goals";
    this.dbType = dbType || window.localStorage;

    // Initialize collection
    if( !this.dbType.getItem(this.dbName) ){
      this.dbType.setItem(this.dbName, []);
    }

    // Callback
    callback = callback || function(){};
    return callback();
  }

  /**
  * Returns all elements in the model, is used by several functions in the class
  *
  * @return {array} Array of all objects in the model 
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
   * Overwrites the previous model data with new data
   *
   * @param {object} [currentModel] A Javascript object representing the desired model state to save 
   * @param {method} [callback] A method to run after the class initializes
   * @return {method} Calls the provided function and provides the current model state
   */
  Model.prototype.save = function(currentModel, callback){
    if(!currentModel){
      return false;
    }
    this.dbType.setItem(this.dbName, JSON.stringify(currentModel));

    // Callback
    callback = callback || function(){};
    return callback(currentModel);
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

    return callback(currentModel);
  };


  /**
   * Finds specific objects in the model
   *
   * @param {integer} [id] The index of the object in the array
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
    return callback(currentModel);
  };

  /**
  * Deletes objects in the model
  *
  */
  Model.prototype.delete = function(id, callback){
    if(id === null || id === false){
      return false;
    }

    currentModel = this.all();
    if(!currentModel[id]){
      return false;
    }

    currentModel.splice(id, 1);
    this.save(currentModel);

    callback = callback || function(){};
    return callback(currentModel);
  };

  /**
  * Deletes all objects in the model
  *
  */
  Model.prototype.deleteAll = function(callback){
    this.dbType.setItem(this.dbName, []);

    callback = callback || function(){};
    return callback();
  };

  // Export to window
  window.Model = Model;
})(window);