var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher.js');
var _fundraisers = [];
var FundraiserStore = new Store(Dispatcher);

FundraiserStore.all = function () {
  return _fundraisers.slice(0);
};

FundraiserStore.find = function (id) {
  _fundraisers.find(function (fundraiser) {
    return fundraiser.id === id;
  });
};

FundraiserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case 'FUNDRAISERS_RECEIVED':
      _fundraisers = payload.fundraisers;
      FundraiserStore.__emitChange();
      break;
    case 'RECEIVE_FUNDRAISER':
      _fundraisers.push(payload.fundraiser);
      FundraiserStore.__emitChange();
      break;
    case 'DELETE_FUNDRAISER':
      _fundraisers = _fundraisers.filter(function (fundraiser) {
        return fundraiser.id !== payload.fundraiserId;
      });
      FundraiserStore.__emitChange();
      break;
  }
};

module.exports = FundraiserStore;
