var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher.js');
var _fundraisers = [];
var FundraiserStore = new Store(Dispatcher);

FundraiserStore.all = function () {
  return _fundraisers.slice(0);
};

FundraiserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case 'FUNDRAISERS_RECEIVED':
      _fundraisers = payload.fundraisers;
      FundraiserStore.__emitchange();
      break;
  }
};

module.exports = FundraiserStore;
