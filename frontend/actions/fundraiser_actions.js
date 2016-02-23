var Dispatcher = require('../dispatcher.js');

module.exports = {
  receiveAll: function (fundraisers) {
    Dispatcher.dispatch({
      actionType: 'FUNDRAISERS_RECEIVED',
      fundraisers: fundraisers
    });
  }
};
