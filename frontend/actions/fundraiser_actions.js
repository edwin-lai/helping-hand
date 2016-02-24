var Dispatcher = require('../dispatcher.js');

module.exports = {
  receiveAllFundraisers: function (fundraisers) {
    Dispatcher.dispatch({
      actionType: 'FUNDRAISERS_RECEIVED',
      fundraisers: fundraisers
    });
  },

  receiveSingleFundraiser: function (fundraiser) {
    Dispatcher.dispatch({
      actionType: 'RECEIVE_FUNDRAISER',
      fundraiser: fundraiser
    });
  },

  deleteFundraiser: function (fundraiserId) {
    Dispatcher.dispatch({
      actionType: 'DELETE_FUNDRAISER',
      fundraiserId: fundraiserId
    });
  }
};
