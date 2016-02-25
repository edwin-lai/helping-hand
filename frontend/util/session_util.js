module.exports = {
  signIn: function (data, callback) {
    $.post('/api/session', {user: data}, callback);
    // callback();
  },

  signOut: function () {
    $.ajax({
      url: '/api/session',
      type: 'delete'
    });
  }
};
