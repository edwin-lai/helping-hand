module.exports = {
  signIn: function () {
    $.post('/api/session');
  },

  signOut: function () {
    $.ajax({
      url: '/api/session',
      type: 'delete'
    });
  }
};
