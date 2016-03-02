var ErrorActions = require('../actions/error_actions.js');

module.exports = {
  signIn: function (data, callback) {
    $.ajax({
      type: "POST",
      url: '/api/session',
      data: {user: data},
      dataType: 'json',
      success: callback,
      error: function (error) {
        ErrorActions.receiveError(error.responseJSON);
      }
    });
  },

  signOut: function (callback) {
    $.ajax({
      url: '/api/session',
      type: 'delete',
      success: callback()
    });
  }
};
