var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher.js');
var _fundraisers = [];
var FundraiserStore = new Store(Dispatcher);

FundraiserStore.all = function () {
  return _fundraisers.slice(0);
};

FundraiserStore.find = function (id) {
  return _fundraisers.find(function (fundraiser) {
    return fundraiser.id === id;
  });
};

FundraiserStore.receiveAllFundraisers = function (payload) {
    _fundraisers = payload.fundraisers;
};

FundraiserStore.receiveSingleFundraiser = function (payload) {
  var index = _fundraisers.findIndex(function (fundraiser) {
      return fundraiser.id === payload.fundraiser.id;
  });
  if (index !== -1) {
    _fundraisers[index] = payload.fundraiser;
  } else {
    _fundraisers.push(payload.fundraiser);
  }
};

FundraiserStore.deleteFundraiser = function (payload) {
  _fundraisers = _fundraisers.filter(function (fundraiser) {
    return fundraiser.id !== payload.fundraiserId;
  });
};

FundraiserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case 'FUNDRAISERS_RECEIVED':
      FundraiserStore.receiveAllFundraisers(payload);
      FundraiserStore.__emitChange();
      break;
    case 'RECEIVE_FUNDRAISER':
      FundraiserStore.receiveSingleFundraiser(payload);
      FundraiserStore.__emitChange();
      break;
    case 'DELETE_FUNDRAISER':
      FundraiserStore.deleteFundraiser(payload);
      FundraiserStore.__emitChange();
      break;
  }
};

module.exports = FundraiserStore;
