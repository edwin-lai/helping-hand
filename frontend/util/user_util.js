var UserActions = require('../actions/user_actions.js');
var ErrorActions = require('../actions/error_actions.js');

module.exports = {
  fetchCurrentUser: function () {
    $.get('api/users/current_user', function (user) {
      UserActions.receiveCurrentUser(user);
    });
  },

  fetchUsers: function (callback) {
    $.get('api/users/', function (users) {
      UserActions.receiveUsers(users);
      if (callback) {
        callback();
      }
    });
  },

  fetchSingleUser: function (id) {
    $.get('api/users/' + id, function (user) {
      UserActions.receiveSingleUser(user);
    });
  },

  createUser: function (data, callback) {
    $.ajax({
      type: "POST",
      url: 'api/users/',
      data: { user: data },
      dataType: 'json',
      success: callback,
      error: function (error) {
        ErrorActions.receiveError(error.responseJSON);
      }
    });
  }
};
