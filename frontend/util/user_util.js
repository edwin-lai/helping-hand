var UserActions = require('../actions/user_actions.js');

module.exports = {
  fetchCurrentUser: function () {
    $.get('api/users/current_user', function () {
      UserActions.receiveCurrentUser();
    });
  },

  fetchUsers: function () {
    $.get('api/users/', function (users) {
      console.log(users);
      UserActions.receiveUsers(users);
    });
  },

  fetchSingleUser: function (id) {
    $.get('api/users/' + id, function (user) {
      UserActions.receiveSingleUser(user);
    });
  },

  createUser: function (data) {
    $.post('api/users/', { user: data });
  }
};
