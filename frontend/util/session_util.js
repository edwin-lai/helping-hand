module.exports = {
  signIn: function (data, callback) {
    $.ajax({
      type: "POST",
      url: '/api/session',
      data: {user: data},
      dataType: 'json',
      success: callback,
      error: function () {
        console.log(arguments);
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
