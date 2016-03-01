var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher.js');
var _donation = {};
var DonationStore = new Store(Dispatcher);

DonationStore.get = function () {
  return _donation;
};

DonationStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case 'RECEIVE_DONATION':
      _donation = payload.donation;
      break;
  }
};

module.exports = DonationStore;
