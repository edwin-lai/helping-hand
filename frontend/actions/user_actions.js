var Dispatcher = require('../dispatcher.js');

module.exports = {
  receiveCurrentUser: function (currentUser) {
    Dispatcher.dispatch({
      actionType: 'RECEIVE_CURRENT_USER',
      currentUser: currentUser
    });
  },

  receiveUsers: function (users) {
    console.log(users);
    Dispatcher.dispatch({
      actionType: 'RECEIVE_USERS',
      users: users
    });
  },

  receiveSingleUser: function (user) {
    Dispatcher.dispatch({
      actionType: 'RECEIVE_USER',
      user: user
    });
  }
};
