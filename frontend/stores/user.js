var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher.js');
var _users = [];
var _currentUser = {};
var UserStore = new Store(Dispatcher);

UserStore.all = function () {
  return _users.slice(0);
};

UserStore.currentUser = function () {
  return _currentUser;
};

UserStore.find = function (id) {
  return _users.find(function (user) {
    return user.id === id;
  });
};

UserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case 'RECEIVE_USERS':
      _users = payload.users;
      UserStore.__emitChange();
      break;
    case 'RECEIVE_USER':
      _users.push(payload.user);
      UserStore.__emitChange();
      break;
    case 'RECEIVE_CURRENT_USER':
      _currentUser = payload.currentUser;
      UserStore.__emitChange();
      break;
  }
};

module.exports = UserStore;
