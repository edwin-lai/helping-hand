var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher.js');
var _error = {};
var ErrorStore = new Store(Dispatcher);

ErrorStore.get = function () {
  console.log(_error)
  if (!_error.length) {
    return $.map(_error, function (value, index) {
      return [value];
    });
  }
};

ErrorStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "ERROR":
      _error = payload.error;
      ErrorStore.__emitChange();
      break;
  }
};

module.exports = ErrorStore;
