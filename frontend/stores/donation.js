var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher.js');
var _donation = {};
var _userDonations = [];
var DonationStore = new Store(Dispatcher);

DonationStore.get = function () {
  return _donation;
};

DonationStore.userDonations = function () {
  return _userDonations;
};

DonationStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case 'RECEIVE_DONATION':
      _donation = payload.donation;
      DonationStore.__emitChange();
      break;
    case 'RECEIVE_USER_DONATIONS':
      _userDonations = payload.donations;
      DonationStore.__emitChange();
      break;
  }
};

module.exports = DonationStore;
