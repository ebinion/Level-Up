/**
 * Extending the Local Storage Object to allow saving of objects.
 *
 * @param  int|string   key     object key
 * @param  int|string   value   object value
 * @return bool                 true|false
 */
Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
};

/**
 * Extending the Local Storage Object to allow returning of saved objects.
 *
 * @param  int|string   key     object key
 * @return int|string           value
 */
Storage.prototype.getObject = function(key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
};


// Namespace Object
var LevelUp = LevelUp || {};

(function($, APP) {
  /**
   * Application Model
   * @type {Object}
   */
  APP.Model = {
    // Default Settings
    storageObject: 'goals',
    storageSync: true,

    /**
      TODO:
      - Add Chrome Storage Sync API
    **/

    get: function() {
        var goals = localStorage.getObject(this.storageObject);
        if (!goals) {
            return {};
        }
        return goals;
    },

    save: function(key, value, callback) {
        var goals = this.get();
        goals[key] = value;

        return localStorage.setObject(this.storageObject, goals);
    },

    clear: function(callback) {
        var cleared = {};

        return localStorage.setObject(this.storageObject, cleared);
    }
};

})(jQuery, LevelUp);