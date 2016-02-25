module.exports = {
  signIn: function (data, callback) {
    $.post('/api/session', {user: data}, callback);
  },

  signOut: function (callback) {
    $.ajax({
      url: '/api/session',
      type: 'delete',
      success: callback
    });
  }
};
