var FundraiserActions = require('../actions/fundraiser_actions.js');
var UserUtil = require('../util/user_util.js');

module.exports = {
  fetchFundraisers: function () {
    $.get('api/fundraisers', function (fundraisers) {
      FundraiserActions.receiveAllFundraisers(fundraisers);
    });
  },

  fetchSingleFundraiser: function (id) {
    $.get('api/fundraisers/' + id, function (fundraiser) {
      FundraiserActions.receiveSingleFundraiser(fundraiser);
    });
  },

  createFundraiser: function (data, callback) {
    $.ajax({
      type: 'POST',
      url: 'api/fundraisers',
      data: { fundraiser: data },
      dataType: 'json',
      success: callback,
      error: function () {
        console.log(arguments);
      }
    });
  },

  updateFundraiser: function (id, data, callback) {
    $.ajax({
      url: 'api/fundraisers/' + id,
      type: 'patch',
      data: { fundraiser: data },
      dataType: 'json',
      success: callback,
      error: function () {
        console.log(arguments);
      }
    });
  },

  destroyFundraiser: function (id) {
    $.ajax({
      url: 'api/fundraisers/' + id,
      type: 'delete',
      success: function () {
        FundraiserActions.deleteFundraiser(id);
      }
    });
  }
};
