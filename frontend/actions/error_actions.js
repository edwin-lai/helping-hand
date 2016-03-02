var Dispatcher = require('../dispatcher.js');

module.exports = {
  receiveError: function (error) {
    Dispatcher.dispatch({
      actionType: 'ERROR',
      error: error
    });
  }
};
