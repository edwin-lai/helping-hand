var Dispatcher = require('../dispatcher.js');

module.exports = {
  receiveDonation: function (donation) {
    Dispatcher.dispatch({
      actionType: 'RECEIVE_DONATION',
      payload: donation
    });
  },

  receiveUserDonations: function (donations) {
    Dispatcher.dispatch({
      actionType: 'RECEIVE_USER_DONATIONS',
      donations: donations
    });
  }
};
